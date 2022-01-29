// require the library 
const mongoose=require('mongoose');


//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');


//aquire the connection (to check if it is sucessful )
const db = mongoose.connection;


//error 


db.on('error',console.error.bind(console,'error connection to db'));



// up and running 
db.once('open',function(){
  
    console.log('sucessfully connect to the database');
});