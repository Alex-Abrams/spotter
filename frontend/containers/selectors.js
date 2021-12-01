export const selectAllLifts = state => Object.values(state.entities.lifts);  //orginal
// export const selectAllLifts = state => Object.values(state.entities.liftsAndSets.lifts);

export const selectAllSets = state => Object.values(state.entities.sets); // original
// export const selectAllSets = state => Object.values(state.entities.liftsAndSets.sets);

// for the previous workouts display
export const selectAllWorkouts = state => Object.values(state.entities.journal);

export const selectAllPrevExercises = state => Object.values(state.entities.journal_exercises);

export const selectAllChartExercises = state => Object.values(state.entities.chart_exercises);

export const selectCopiedWorkout = state => Object.values(state.entities.copied_workout);
