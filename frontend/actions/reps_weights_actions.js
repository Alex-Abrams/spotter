export const RECEIVE_REPS_WEIGHTS = "RECEIVE_REPS_WEIGHTS";
/// create in a tad
export const DELETE_REPS_WEIGHTS = "DELETE_REPS_WEIGHTS";
export const EDIT_REPS_WEIGHTS = "EDIT_REPS_WEIGHTS";



export const receiveRepsWeights = (reps, weights) => ({
  type: RECEIVE_REPS_WEIGHTS,
  reps,
  weights,
});

export const receiveSingleSet = (reps, weights) => ({
  type: RECEIVE_SINGLE_SET,
  reps,
  weights,
});


export function createRepsWeights(lift_id, reps, weights) { // MIGHT require auth_token
  return function action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/lifts/${lift_id}/reps_weights`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lift_id: lift_id,
        reps: reps,
        weight: weight,
      })
    });

    return request.then(
      response => console.log(response.json), //dispatch receiveRepsWeights
      err => console.log("createRepsWeight Error")
    )
    .then(
      json => console.log(json),
      err => console.log("createRepsWeight json error")
    );
  }
}


export function requestRepsWeights(auth_token, lift_id) {
  return functon action(dispatch) {
    const request = fetch(`http://10.0.2.2:3000/lifts/${lift_id}/reps_weights`, {
      method: 'GET',
      headers: {
        "Authorization" : auth_token
      }
    });

    return request.then(
      response => console.log(response.json),
      err => console.log("requestRepsWeight error"),
    )
    .then(
      json => console.log(response.json),
      err => console.log("requestRepsWeight json error")
    );
  }
}
