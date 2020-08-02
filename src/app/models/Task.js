const { Schema, model } = require('mongoose');

const TaskSchema = new Schema(
	{
		task: {
			type: String,
			required: true,
		},
		check: {
			type: Boolean,
			required: true,
			default: false,
		},
		user_id: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

module.exports = model('Task', TaskSchema);
