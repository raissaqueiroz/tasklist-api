const bcrypt = require('bcryptjs');
const Yup = require('yup');
const User = require('../models/User');

class UserController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			password_hash: Yup.string().required().min(6),
		});

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: 'Falha na validação. ' });

		const userExists = await User.findOne({ email: req.body.email });

		if (userExists)
			return res.status(400).json({ error: 'Esse usuário já existe.' });

		if (!req.body.name || !req.body.email || !req.body.password_hash)
			return res.status(400).json({
				error: 'Por favor, informe todos os dados necessários.',
			});

		const { id, name, email } = await User.create(req.body);

		return res.json({ id, name, email });
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string(),
			email: Yup.string().email(),
			old_password: Yup.string().min(6),
			password_hash: Yup.string()
				.min(6)
				.when('old_password', (old_password, field) =>
					old_password ? field.required() : field
				),
			confirm_password: Yup.string().when(
				'password_hash',
				(password_hash, field) =>
					password_hash
						? field.required().oneOf([Yup.ref('password_hash')])
						: field
			),
		});

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: 'Falha na validação. ' });

		const { email, old_password } = req.body;

		const user = await User.findById(req.user_id);

		if (email !== user.email) {
			const userExists = await User.findOne({ email });

			if (userExists)
				return res
					.status(400)
					.json({ error: 'Esse usuário já existe.' });
		}

		if (
			old_password &&
			!(await bcrypt.compare(old_password, user.password_hash))
		)
			return res.status(401).json({ error: 'Senha incorreta. ' });

		const { id, name } = await User.findOneAndUpdate(
			{ _id: req.user_id },
			req.body,
			{ new: true }
		);

		return res.json({ id, name, email });
	}
}

module.exports = new UserController();
