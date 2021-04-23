export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_LIFT = "RECEIVE_LIFT";
export const RECEIVE_SET = "RECEIVE_SET";

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
