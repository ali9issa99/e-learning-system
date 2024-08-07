import  User  from '../models/user.model.js';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const user = new User({ username, password, email, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', {
      expiresIn: '1h'
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

