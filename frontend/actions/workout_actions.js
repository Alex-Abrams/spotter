export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_LIFT = "RECEIVE_LIFT";

export const receiveWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const receiveLift = (lift) => ({
  type: RECEIVE_LIFT,
  lift
});
