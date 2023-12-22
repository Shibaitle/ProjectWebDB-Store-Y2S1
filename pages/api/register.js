// pages/api/auth/register.js
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
    // Check if the user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      password, // In a real-world scenario, you would hash the password before saving
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
    console.log("biker biker biker biker register successfully")
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
