// pages/api/auth/login.js
import mongoose from 'mongoose';
import User from '../../models/UserSchema';

if (mongoose.connections.length === 0) {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected');
    });
  
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
  
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });
  } else {
    console.log('MongoDB is already connected');
  }

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // Validate inputs
  if (!username || !password) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Mock: Check if the provided password matches the stored password
    // In a real-world scenario, you would use a secure password verification method
    if (password === user.password) {
      res.status(200).json({ message: 'Login successful' });
      console.log("LOGIN SUCCESSFULLY")
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
