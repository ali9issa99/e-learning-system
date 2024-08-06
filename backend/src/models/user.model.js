import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String
});

// Add a method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  // Implement your password comparison logic here
  return candidatePassword === this.password; // Simplified for example
};

const User = mongoose.model('User', userSchema);

export { User };

