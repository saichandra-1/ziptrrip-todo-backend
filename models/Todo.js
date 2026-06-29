const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    dueDate: { type: Date, default: null },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
