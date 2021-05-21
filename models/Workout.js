const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exercises = {
  type: {
    type: String,
    required: 'please choose cardio or resistance',
    enum: ['cardio', 'resistance']
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
  exercises: [exercises]
});

WorkoutSchema;

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
