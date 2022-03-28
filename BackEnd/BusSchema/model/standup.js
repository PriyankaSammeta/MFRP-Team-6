const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    
    from:{type:String},
    to : {type:String},
    date :{type:String},
    fare :{type:String},
    seat: {type:Number}
})
module.exports = mongoose.model('bus', busSchema)



