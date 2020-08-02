const Yup = require('yup');
const Task = require('../models/Task');

class TaskController {
	async index(req, res) {
		const tasks = await Task.find({ user_id: req.user_id, ...req.query });

		res.json(tasks);
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			task: Yup.string().required(),
		});

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: 'Falha ao cadastrar. ' });

		const { task } = req.body;

		const tasks = await Task.create({ user_id: req.user_id, task });

		return res.json(tasks);
	}

	async update(req, res) {
		const { task_id } = req.params;

		const task = await Task.findById(task_id);

		if (!task)
			return res.status(400).json({ error: 'Tarefa não existe. ' });

		if (String(task.user_id) !== String(req.user_id))
			return res.status(401).json({ error: 'Não autorizado. ' });

		const tasks = await Task.findOneAndUpdate({ _id: task_id }, req.body, {
			new: true,
		});

		return res.json(tasks);
	}

	async destroy(req, res) {
		const { task_id } = req.params;

		const task = await Task.findById(task_id);

		if (!task)
			return res.status(400).json({ error: 'Tarefa não existe. ' });

		if (String(task.user_id) !== String(req.user_id))
			return res.status(401).json({ error: 'Não autorizado. ' });

		await Task.findByIdAndDelete(task_id);

		return res.json({ message: 'Tarefa excluída com sucesso.' });
	}
}

module.exports = new TaskController();
