/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) =>
{
  res.render('index', {
    favorite: 'Eta',
    name: 'Ben',
    reasons: ['fast', 'lightweight', 'simple'],
  });
});

export default router;