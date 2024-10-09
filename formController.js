const FormResponse = require('./Formresponses');
const { google } = require('googleapis');
const path = require('path');

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'path/to/your-credentials.json'),
  scopes: ['https://www.googleapis.com/auth/forms.responses.readonly'],
});

const forms = google.forms({ version: 'v1', auth });

exports.getFormResponses = async (req, res) => {
  try {
    const formId = req.params.id;
    const response = await forms.forms.responses.list({ formId });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching form responses');
  }
};

exports.saveFormResponses = async (req, res) => {
  try {
    const { formId, responses } = req.body;
    const newResponse = new FormResponse({ formId, responses });
    await newResponse.save();
    res.status(201).send('Form responses saved');
  } catch (error) {
    res.status(500).send('Error saving form responses');
  }
};
