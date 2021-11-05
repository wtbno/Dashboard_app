const Usuario = require('../models/admin.model');

module.exports = {
    async index(req,res){
        const user = await Admin.find();
        res.json(user);
    },
    async create(req,res){
        const {nome_admin, cpf_admin, email_admin, senha_admin} = req.body;
        let data = {};
        let user = await Admin.findOne({email_Admin});
        if(!user){
            data = {nome_admin, cpf_admin, email_admin, senha_admin};
            user = await Admin.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    async detalis(req,res){
        const{_id} = req.params;
        const user = await Admin.findOnde({_id});
        res.json(user);
    },

    async delete(req,res){
        const {_id} = req.params;
        const user = await Admin.findByIdAndDelete({_id});
        return res.json(user);
    },

    async update(req,res){
       const {_id, nome_admin, cpf_admin, email_admin, senha_admin} = req.body;

       const data = {nome_admin, cpf_admin, email_admin, senha_admin};

      const user = await Usuario.findOneAndUpdate({_id}, data, {new:true});

      res.json(user);
    }

}