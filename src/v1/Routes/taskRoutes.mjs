import express from 'express';

const router = express.Router();

router.route('/')
.get((req, res) => {
  res.send(`Testing route ${req.baseUrl}`);
})
.post()
.put()
.patch()

export default router;