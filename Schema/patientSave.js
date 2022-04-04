const PatientData = require('./patientSchma')

const patientSave = async (formData) =>
{
    const patientDocument = await PatientData(formData)

    await patientDocument.save()
}

module.exports = patientSave