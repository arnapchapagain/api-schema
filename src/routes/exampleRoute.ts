import { Router, Request, Response } from 'express';
import { getExampleMessage } from "../controllers/exampleController";

const router = Router();

router.get('/', getExampleMessage);

export default router;
