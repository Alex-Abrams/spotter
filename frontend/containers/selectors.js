export const selectAllLifts = state => Object.values(state.entities.lifts);

export const selectAllSets = state => Object.values(state.entities.sets);

// for the previous workouts display
export const selectAllWorkouts = state => Object.values(state.entities.journal);

export const selectAllPrevExercises = state => Object.values(state.entities.journal_exercises);
