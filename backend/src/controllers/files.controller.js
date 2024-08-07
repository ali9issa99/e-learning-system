import File from '../models/file.model.js';
import Class from '../models/class.model.js';


export const uploadFile = async (req, res) => {
  try {
    const { filename, fileUrl, uploadedBy, classId } = req.body;

   
    if (!filename || !fileUrl || !uploadedBy || !classId) {
      return res.status(400).json({ message: 'All fields are required: filename, fileUrl, uploadedBy, classId' });
    }

    
    const file = new File({ filename, fileUrl, uploadedBy, classId });
    await file.save();

    res.status(201).json({ message: 'File uploaded successfully', file });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading file', error: err.message });
  }
};



// Get all files for a class
export const getFilesForClass = async (req, res) => {
  const { classId } = req.params;

  try {
    const files = await File.find({ classId }).populate('uploadedBy', 'username email');

    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Download a file
export const downloadFile = async (req, res) => {
  const { id } = req.params;

  try {
    const file = await File.findById(id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.download(file.fileUrl, file.filename);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a file
export const deleteFile = async (req, res) => {
  const { id } = req.params;

  try {
    const file = await File.findById(id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    await File.findByIdAndDelete(id);

    // Remove file reference from the class
    await Class.findByIdAndUpdate(file.classId, { $pull: { files: id } });

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
