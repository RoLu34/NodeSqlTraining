import express from 'express';

// Import database configuration and models
import "./config/db.js";
import "./models/userModel.js";

// Import routes
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use("/users", userRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});