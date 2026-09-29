import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

// create express app
const app = express();

// routes implementation
app.use('/books', bookRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`listen to port ${port}...`);
});