const router = require('express').Router();
const Workout = require('../../models/Workout');

//this gets our last workout
router.get('/', (req, res) => {
  console.log('workout rout hit**********');
  Workout.find()
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//this gets all workouts
router.get('/range', (req, res) => {
  Workout.find({})
    .limit(7)
    .sort({ date: -1 })
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/', ({ body }, res) => {
  console.log('****CREAT WORKOUT*****');
  Workout.create(body)
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/:id', ({ body, params }, res) => {
  console.log(body);
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
