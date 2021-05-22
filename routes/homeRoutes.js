const router = require('express').Router();
const path = require('path');

//this route renders the stats
router.get('/stats/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
  console.log('STAT ROUTE');
});
//this route renders the exercise
router.get('/exercise/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
  console.log('EXERCISE ROUTE');
});

module.exports = router;
