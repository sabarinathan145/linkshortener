const mongoose = require('mongoose');


const connectTODB = async()=> mongoose.connect('mongodb+srv://sabarinathanks:priyasabari33@userapplication.uv3in.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
    useNewUrlParser : true,
      useFindAndModify : false,
      useUnifiedTopology :true,
      useCreateIndex: true
  });   

  module.exports = connectTODB;
