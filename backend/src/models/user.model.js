import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  
  return candidatePassword === this.password;
};

const User = mongoose.model('User', userSchema);

export default User; 
