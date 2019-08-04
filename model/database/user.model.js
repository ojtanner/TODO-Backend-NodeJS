const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid email');
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

module.exports = mongoose.model('User', userSchema);