import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

// create express app
const app = express();

// routes
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`listen to port ${port}...`);
});