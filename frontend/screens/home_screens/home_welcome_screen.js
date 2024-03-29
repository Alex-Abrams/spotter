import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; /////
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesomeIcon'; // currently not working :()
import LastWorkoutTouchableItem from './last_workout_touchable_item';
import LastWorkoutItem from './last_workout_item';
import WorkoutRecords from './workout_records';
import LoadingScreen from '../loading_screen';
import NoWorkoutsScreen from './no_workouts_screen';
///


//// this will be exported to home_screen
class HomeWelcomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      is_minimized: false,
    };
  }

  componentDidMount() {
    const { current_user, auth_token, is_loading, journal, all_exercises } = this.props;
    this.props.loadingActions.loadingScreen();
    // These next store items need to load in carefully, to seperate the users with no workout data and the current users
    this.props.userActions.requestCurrentUser(this.props.username, this.props.auth_token)
    .then((user) => this.props.fetchAllExercises.requestChartExercises(user.currentUser.id, auth_token))
    .catch(error => console.log('111', error))

    .then(() => this.props.prevWorkoutActions.requestAllWorkouts(this.props.current_user.id, auth_token))
    .catch(error => console.log('222', error))
      // if the workout list is greater than one, then they definitly have workout information
    .then((workout_list) => {
      if(workout_list.workouts.length > 1) {
        this.props.prevWorkoutActions.requestAllWorkoutExercises(this.props.current_user.id, workout_list.workouts[workout_list.workouts.length - 1].id, auth_token)
      } else {
        // loading complete is already called within requestAllWorkoutExercises above, so if they do not have workout info, then the loading circle will finish here
        this.props.loadingActions.loadingComplete();
      }
    })
    .catch(error => console.log('333', error));

  }


  displayLastWorkout(arrow_direction) { // display the users last workout {/* */}
    const { last_workout,  is_loading } = this.props;

    const today = new Date(); /// getting the difference in days since the last workout and today, ends with days_since
    const created_on = (last_workout.length > 0) ? new Date(last_workout[0].created_at) : new Date();
    const ms_in_day = 24 * 60 * 60 * 1000;
    created_on.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const days_since = parseInt((+today - +created_on)/ms_in_day); //+makes sure its a nonzero number, parseInt also MAth.floors so that the number is rounded down


    let display_days_since_last_workout = null;
    const last_wo_ex_section = (last_workout.length > 0) ? (last_workout[0].exercise_section) : null;  // for some reason this is the only function on this page that does not wait for anything to load despite is_loading being true
    if(days_since === 0) {
      display_days_since_last_workout = (<Text style={{fontSize: 15}}>{last_wo_ex_section} Today</Text>);
    } else if(days_since === 1) {
      display_days_since_last_workout = (<Text style={{fontSize: 15}}>{last_wo_ex_section} 1 day ago</Text>);
    } else {
      display_days_since_last_workout = (<Text style={{fontSize: 15}}>{last_wo_ex_section} {days_since} days ago</Text>);
    };


    const display_last_workout_or_na = (last_workout.length > 0) ? ( // last workout needs to have at least 1 exercise to display
      <View style={{flex: 1}}>
        <TouchableHighlight
          underlayColor="white"
          style={{ height: 80 }}
          onPress={() => {this.setState({ is_minimized: !this.state.is_minimized})}}>

          <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{paddingLeft: 12}}>
              <Text style={{fontSize: 22}}>Previous Workout</Text>
              { display_days_since_last_workout }
            </View>

            <View style={{alignContent: 'flex-end'}}>
              <EvilIcons name={arrow_direction} size={62} />
            </View>
          </View>
        </TouchableHighlight>

      </View>
    ) : (
      <Text>no last workout</Text>
    );

    return(
      <View>
        {display_last_workout_or_na}
      </View>
    );
  }

  displayLastWorkoutExercises() {
    const { last_workout } = this.props; // array of the very last workouts exercises
    // sum each workout by its sets, so if there are 4 Leg presses, itll show => Leg Press 4 sets 300 top weight

    const sorted_exercises = last_workout.sort(function(a, b) { // sort the last_workout object by its names
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });


    ////////////////////////////  sorting the weights of last workout
    let name = sorted_exercises[0].name;
    let heaviest = sorted_exercises[0];
    let exercises_weight = [];
    for( let i = 0; i < sorted_exercises.length; i ++) { //current heaviest is 185, also last of its name type

      if(sorted_exercises[i].name !== name) { // if there is a change in the name (Leg Press to Squats, then the loop is now at the squats catagory and can push the heaviest weight from the previous catagory)
        name = sorted_exercises[i].name;  // change the name to the current iteration's elements name
        exercises_weight.push(heaviest); // push the heaviest
        heaviest = sorted_exercises[i]; // reset the heaviest to the current iterations eleemtn

      };

      if(sorted_exercises[i].weight > heaviest.weight) { // change the heaviest to current heaviest in the name catagory
        heaviest = sorted_exercises[i];
      };

      if(i === sorted_exercises.length - 1) {  // the last element will always be the indicator to push the heaviest
        exercises_weight.push(heaviest);
      };
    }
    //////////////////////////// sorting the sets of last workout
    exercises_weight.forEach((exercise) => { // iterate over each exercise weight object
        let set_count = sorted_exercises.filter(s_exercise => s_exercise.name === exercise.name); // filter down to the exercises that use the same name
        exercise["set_count"] = set_count.length; // add the set count to the length
    });

    ////////////////////////////

    const display_workout_exercises_or_null = (this.state.is_minimized) ? (
      <View>
        {exercises_weight.map((exercise, i) =>
        <LastWorkoutItem
          key={i}
          exercise={exercise} />)}
      </View>
        ) : (
          null
        );

    return(
      <View>
        {display_workout_exercises_or_null}
      </View>
    );

  }


  render() {
    const { current_user, all_exercises, last_workout } = this.props;


    const display_last_workout = (this.state.is_minimized) ? this.displayLastWorkout("chevron-up") : this.displayLastWorkout("chevron-down"); //onclick chnages arrow from down to up

    const display_last_workout_exercises_line_or_null = (this.state.is_minimized) ? ( // a divider line across the phone, only shows when is_minimized is true
      <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 10 }}/>
    ) : (
      null
    );

    const sorted_by_type = [];  // sorting all_exercises into an array of sectioned exercises in the order of the types variable
    const types = ['Arms', 'Shoulders', 'Chest', 'Legs', 'Back'];

    for(let i = 0; i < types.length; i ++) { // 5 times filter out each type ie 'Arms, Legs, Etc'
      let type = all_exercises.filter(exercise => exercise.exercise_section === types[i]);
      sorted_by_type.push(type);
    };

    const sorted_by_weight = [];  // an array of the highest lbs object

    for(let i = 0; i < sorted_by_type.length; i ++) {  // go over the array of arrayed sections (5 times)
      let heaviest = 0;

      // next loop iterates through each array section
      for(let z = 0; z < sorted_by_type[i].length; z ++) {
        if (sorted_by_type[i][z].weight > heaviest) { // boolean replaces the highest current weight
          heaviest = sorted_by_type[i][z].weight;
          sorted_by_weight[i] = sorted_by_type[i][z]; // sets the weight in order in the sorted_by_weight array
        };
      };
      heaviest = 0;

    };

    const display_workouts_or_loadingbar = (last_workout.length > 0) ? (  // Cahning this from display workouts or display new user
      <View>
        {display_last_workout}
        <View style={{ borderBottomColor: '#C7C7C7', borderBottomWidth: 10 }}/>
        {this.displayLastWorkoutExercises()}
        {display_last_workout_exercises_line_or_null}
        <WorkoutRecords
          sorted_by_weight={sorted_by_weight}
          current_user={current_user}
          all_exercises={all_exercises}
          />
        {/* put a line here
          */}


      </View>
    ) : (
      <View>
        <NoWorkoutsScreen />
      </View>
    );

    if(this.props.is_loading) {
      return <LoadingScreen />
    } else {
      return(
        <ScrollView>
          {display_workouts_or_loadingbar}
        </ScrollView>
      );
    };

  }
}

export default HomeWelcomeScreen;
