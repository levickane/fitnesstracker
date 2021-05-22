const router = require('express').Router();
const Workout = require('../models/Workout');

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((workoutDB) => {
      console.log('after create', workoutDB);
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//this gets our last workout
router.get('/api/workouts', ({ req }, res) => {
  console.log('this is a get');
  Workout.find({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//this gets all workouts
router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .limit(7)
    .then((workoutDB) => {
      console.log(workoutDB[0].exercises);
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
  Workout.create({ body })
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
