import express from 'express';
import cors from 'cors';

import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';

let corsOptions = {
    origin: 'http://localhost:5173',
};

// create express app
const app = express();

//to parse incoming date
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/users', userRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`listen to port ${port}...`);
});
