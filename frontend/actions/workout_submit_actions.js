export const RECEIVE_LIFTS_AND_SETS = "RECEIVE_LIFTS_AND_SETS";
export const RESET_LIFTS_AND_SETS = "RESET_LIFTS_AND_SETS";
export const CLEAR_ALL_LIFTS_AND_SETS = "CLEAR_ALL_LIFTS_AND_SETS";
import fetch from 'cross-fetch';

export const receiveLiftsAndSets = (liftsAndSets) => ({
  type: RECEIVE_LIFTS_AND_SETS,
  liftsAndSets
});

export const resetLiftsAndSets = () => ({
  type: RESET_LIFTS_AND_SETS,
});

export const clearAllLiftsAndSets = () => ({
  type: CLEAR_ALL_LIFTS_AND_SETS,
});

// /users/:user_id/workouts/:workout_id/lifts
// promises.push(fetch(`http://10.0.2.2:3000/users/1/workouts/1/lifts`));

 function postLiftsAndSets(liftsAndSets, workout_id, auth_token, user_id) {
    // this function takes the newly combined lifts and sets (submit reducer) and pushes them into an array
    // the array of promises is then all posted at once when submit workout button is pressed
    // this function is used in postWorkout below
    let promises = [];
    liftsAndSets.forEach(set => {
      console.log("SET!!!", set);
      promises.push(fetch(`http://10.0.2.2:3000/users/${user_id}/workouts/${workout_id}/lifts`, {
        method: 'POST',
        headers: {
          "Authorization": auth_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${set.name}`,
          reps: `${set.reps}`,
          weight: `${set.weight}`,
          exercise_section: `${set.exercise_section}`,
          workout_id: `${workout_id}`
        })
      }));

      Promise.all(promises)
        .then(
          response => console.log("sucess ayy", response),
          err => console.log("not success", err)
        );
    });
  }

// /users/:user_id/workouts(.:format)
// exercise_section ==> type
export function postWorkout(workout, auth_token, liftsAndSets) {
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
      err => console.log("response.json erro ><", err)
    )
    .then(
      // postLiftsAndSets(liftsAndSets, workout_id, auth_token)
      // json => console.log("great post Workout Success", json.id),
        // so the postLiftsAndSets needs to happen here with Promiseall
        // which means postWorkout will need to take the liftsAndSets argument
      json => {
        postLiftsAndSets(liftsAndSets, json.id, auth_token, json.user_id);
        //needs to reset the store
        dispatch(resetLiftsAndSets());
        dispatch(clearAllLiftsAndSets());
      },
      err => console.log("postWorkout post error :()", err)
    );

  }
}
