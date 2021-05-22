const router = require('express').Router();
const Workout = require('../models/Workout');

//this gets our last workout
router.get('/api/workouts', (req, res) => {
  console.log('***HOME PAGE***');
  Workout.find({})
    .then((workoutDB) => {
      console.log('hello', workoutDB);
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//this gets all workouts
router.get('/api/workouts/range', (req, res) => {
  console.log('***STATS PAGE****');
  Workout.find({})
    .limit(7)
    .sort({ date: -1 })
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
  console.log('****CREAT WORKOUT ROUTE*****');
  console.log('hello***', body);
  const workout = new Workout(body);
  Workout.create(workout)
    .then((workoutDB) => {
      console.log('Hello', workoutDB);
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  console.log('updating workout stuff', body, params);
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
