const mongoose = require('mongoose')

const username = "reactapp"
const password = "React123"

const connectDatabase = () =>{

mongoose.connect(`mongodb+srv://${username}:${password}@datastore.tk5uc.mongodb.net/reactApp`,
//'mongodb://localhost:27017/reactApp',
{
    useNewUrlParser : true,
    useUnifiedTopology:true,
})
.then((con)=>{console.log(`Mongodb connected to ${con.connection.host}`)})
.catch((err)=>console.log(err))
}

module.exports = connectDatabase




