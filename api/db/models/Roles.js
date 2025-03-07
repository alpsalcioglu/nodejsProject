const mongoose = require('mongoose');
const RolePrivileges = require('./RolePrivileges');
const schema = mongoose.Schema({
    role_name: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    created_by:{
        type: mongoose.Schema.Types.ObjectId
    }
},{
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


class Roles extends mongoose.Model{

    static async deleteOne(filter) {
        const role = await this.findOne(filter);
        if (role) {
            await RolePrivileges.deleteMany({ role_id: role._id });
        }
        return super.deleteOne(filter);
    }
    
}


schema.loadClass(Roles);
module.exports = mongoose.model("Roles",schema);
