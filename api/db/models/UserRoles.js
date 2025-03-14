const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true},  
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


class UserRoles extends mongoose.Model{

}


schema.loadClass(UserRoles);
module.exports = mongoose.model('User_Roles',schema);