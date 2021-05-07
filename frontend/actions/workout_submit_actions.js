export const RECEIVE_LIFTS_AND_SETS = "RECEIVE_LIFTS_AND_SETS";
export const RESET_LIFTS_AND_SETS = "RESET_LIFTS_AND_SETS";

export const receiveLiftsAndSets = (liftsAndSets) => ({
  type: RECEIVE_LIFTS_AND_SETS,
  liftsAndSets
});

export const resetLiftsAndSets = () => ({
  type: RESET_LIFTS_AND_SETS,
});
