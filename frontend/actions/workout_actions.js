export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_LIFT = "RECEIVE_LIFT";
export const RECEIVE_SET = "RECEIVE_SET";
export const RESET_SETS = "RESET_SETS";
export const RESET_LIFTS = "RESET_LIFTS";
export const EDIT_SET = "EDIT_SET";
export const DELETE_SET = "DELETE_SET";

export const receiveWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout // loooks like {type: "chest", user_id: 5}
});

export const receiveLift = (lift) => ({
  type: RECEIVE_LIFT,
  lift // action will look like: {workout_id: (from the above one),
    // type: "chest", name: "bench press", weight: 150, reps: 12, sets: 3}
});

export const receiveSet = (set) => ({
  type: RECEIVE_SET,
  set
});

export const resetSets = () => ({
  type: RESET_SETS
});

export const resetLifts = () => ({
  type: RESET_LIFTS
});

export const editSet = (set) => ({
  type: EDIT_SET,
  set
});

export const deleteSet = (set_id) => ({
  type: DELETE_SET,
  set_id
});
