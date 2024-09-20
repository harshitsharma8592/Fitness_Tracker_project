const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
const workoutRoutes = require('./routes/workoutRoute');
const profileRoutes = require('./routes/profileRoute');
const dietRoutes = require("./routes/dietRoute");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://localhost:5173',  // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',   // Allowed HTTP methods
  credentials: true,                // Allow credentials (e.g., cookies)
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/diet',dietRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
