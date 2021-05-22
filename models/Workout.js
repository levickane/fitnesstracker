const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseData = {
  type: {
    type: String,
    required: 'please choose cardio or resistance'
  },
  name: {
    type: String,
    required: 'name your workout'
  },
  duration: {
    type: Number,
    required: 'Please enter a duration'
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  distance: {
    type: Number
  }
};

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [exerciseData]
});

//this dynamically creates a property in the schema and then
//accumulates value to the duration property
WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((acc, curr) => {
    return acc + curr.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
