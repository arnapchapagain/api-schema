import express, { Request, Response } from 'express';
import exampleRoute from './api/routes/exampleRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use('/example', exampleRoute);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

export default app;
