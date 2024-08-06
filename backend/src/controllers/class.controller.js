import Class from '../models/class.model.js';
// import User from '../models/User.js';
// import File from '../models/File.js';

// Create a new class
export const createClass = async (req, res) => {
  try {
    const { name, description, teacher } = req.body;
    const newClass = new Class({ name, description, teacher });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all classes
export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('teacher').populate('students').populate('files');
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a class by ID
export const getClassById = async (req, res) => {
  try {
    const classId = req.params.id;
    const classData = await Class.findById(classId).populate('teacher').populate('students').populate('files');
    if (!classData) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a class
export const updateClass = async (req, res) => {
  try {
    const classId = req.params.id;
    const { name, description, teacher } = req.body;
    const updatedClass = await Class.findByIdAndUpdate(classId, { name, description, teacher }, { new: true });
    if (!updatedClass) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a class
export const deleteClass = async (req, res) => {
  try {
    const classId = req.params.id;
    const deletedClass = await Class.findByIdAndDelete(classId);
    if (!deletedClass) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
