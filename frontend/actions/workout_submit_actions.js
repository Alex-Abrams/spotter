export const RECEIVE_LIFTS_AND_SETS = "RECEIVE_LIFTS_AND_SETS";
export const RESET_LIFTS_AND_SETS = "RESET_LIFTS_AND_SETS";
import fetch from 'cross-fetch';

export const receiveLiftsAndSets = (liftsAndSets) => ({
  type: RECEIVE_LIFTS_AND_SETS,
  liftsAndSets
});

export const resetLiftsAndSets = () => ({
  type: RESET_LIFTS_AND_SETS,
});


// /users/:user_id/workouts(.:format)
// exercise_section ==> type
export function postWorkout(workout, auth_token) {
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/users/${workout.user_id}/workouts`, {
      method: 'POST',
        headers: {
          "Authorization": auth_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: `${workout.user_id}`,
          exercise_section: `${workout.type}`
        })
    });

    return request.then(
      response => response.json(),
    )
    .then(
      json => console.log("great post Workout Success"),
      err => console.log("postWorkout post error :(")
    );

  }
}


// export function postLiftsAndSets = ()
