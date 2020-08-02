const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

require('dotenv').config();

class SessionController {
	async store(req, res) {
		const { email, password } = req.body;

		// Verificando se e-mail existe
		const user = await User.findOne({ email });

		if (!user)
			return res.status(401).json({ error: 'Usuário não existe.' });

		if (!(await bcrypt.compare(password, user.password_hash)))
			return res.status(401).json({ error: 'Senha incorreta.' });

		const { id, name } = user;

		return res.json({
			user: {
				id,
				name,
				email,
			},
			token: jwt.sign({ id }, process.env.JWT_SECRET, {
				expiresIn: '7d',
			}),
		});
	}
}

module.exports = new SessionController();
