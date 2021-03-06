import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes/index.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
