import { Router, Request, Response } from 'express';
import { getExampleMessage } from '../controllers/exampleController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json(getExampleMessage());
});

export default router;
