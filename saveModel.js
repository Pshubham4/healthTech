const UserData = require('./Schema/Schema')

const SaveModel = async (response) =>
{
    const inputDocument = await new UserData(response)
    
     await inputDocument.save()

     
}

module.exports = SaveModel