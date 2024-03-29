export const selectAllLifts = state => Object.values(state.entities.lifts);  //orginal

export const selectAllSets = state => Object.values(state.entities.sets); // original

// for the Journal display
export const selectAllWorkouts = state => Object.values(state.entities.journal);

export const selectAllPrevExercises = state => Object.values(state.entities.journal_exercises);

export const selectAllChartExercises = state => Object.values(state.entities.chart_exercises);

export const selectCopiedWorkout = state => Object.values(state.entities.copied_workout);

export const selectMostRecentWorkout = (state) => {

  const last = Object.values(state.entities.journal).length - 1; // find position of last workout
  return Object.values(state.entities.journal)[last];  // return the id of the last workout to request its info (exercises)
  //
};

export const selectIsLoading = state => (state.entities.loading)["is_loading"];

export const selectHeaderBoolean = state => Object.values(state.entities.header);
