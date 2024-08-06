import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from "./routes/users.routes.js";
import connectToDatabase from './database/connection.js';

dotenv.config(); 
const app = express();
app.use(express.json());
app.use("/users", usersRoutes);

connectToDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

