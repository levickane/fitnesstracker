const router = require('express').Router();
const Workout = require('../../models/index');

//this gets our last workout
router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//this gets all workouts
router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts/:id', ({ body }, res) => {
  Workout.insert(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
