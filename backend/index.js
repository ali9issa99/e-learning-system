import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from "./src/routes/users.routes.js";
import classRoutes from "./src/routes/classes.routes.js";
import fileRoutes from './src/routes/files.routes.js';

import connectToDatabase from './src/database/connection.js';

dotenv.config(); 
const app = express();
app.use(express.json());

app.use("/api/users", usersRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/files', fileRoutes);

connectToDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

