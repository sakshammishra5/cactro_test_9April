const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
  }
  next();
});

// Add comparePassword method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

