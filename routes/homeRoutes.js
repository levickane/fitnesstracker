const router = require('express').Router();


//this route renders the homepage
router.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, '../../index.html')));
//this route renders the stats
router.get('/stats', async (req, res) => 
  res.sendFile(path.join(__dirname, '../../stats.html')));
//this route renders the exercise
router.get('/exercise', async (req, res) => 
  res.sendFile(path.join(__dirname, '../../excercise.html')));


module.exports = router;