import express from 'express';
import { setRoutes } from './routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

setRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});