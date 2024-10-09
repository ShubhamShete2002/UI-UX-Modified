const mongoose = require('mongoose');

const FormResponseSchema = new mongoose.Schema({
  formId: { type: String, required: true },
  responses: { type: Array, required: true },
});

module.exports = mongoose.model('Formresponses', FormResponseSchema);
