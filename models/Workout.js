const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
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
      }
    ]
  },
  {
    //this was the missing link to make it all work!
    //this will include any and all virtual properties when you GET the data
    //and will ensure that it's in the json format to match the rest of this schema
    toJSON: {
      virtuals: true
    }
  }
);

//this dynamically creates a property in the schema and then
//accumulates value to the duration property
WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
