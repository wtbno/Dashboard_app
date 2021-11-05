const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const DataSchema = new mongoose.Schema({
    nome_admin:String,
    cpf_admin:String,
    email_admin:String,
    senha_admin:String,
},{ 
    timestamps:true
});

DataSchema.pre("save",function(next){
    if(!this.isModified("senha_admin")){
        return next();
    }
    this.senha_admin = bcrypt.hashSync(this.senha_admin,10);
    next();
});

DataSchema.pre('findByIdAndUpdate', function(next){
    var password = this.getUpdate().senha_admin+'';
    if(password.length<55){
        this.getUpdate().senha_admin = bcrypt.hashSync(password,10)
    }
    next();
})


const usuarios = mongoose.model("Usuarios",DataSchema);
module.exports = usuarios;