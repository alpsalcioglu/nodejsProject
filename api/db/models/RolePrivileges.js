const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id: {type: mongoose.Schema.Types.ObjectId, required:true},
    permission: {type: String, required: true},
    created_by: {type: mongoose.Schema.Types.ObjectId}
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


class RolePrivileges extends mongoose.Model{

}


schema.loadClass(RolePrivileges);
module.exports = mongoose.model('Role_Privileges',schema);