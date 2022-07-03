# README


## Spotter Workout Journal ##

* Ruby version
* 2.6.3
* Run `$ bundle install` in top folder install gemfile
* Run `$ npm install ` in the "frontend" folder to install packages
* Run `$ npm start` in "frontend" folder to start expo
* works best on Android v8+

* System dependencies
*   Node version 16.14.2
*   Expo v5 +

 ##  Some Core Screenshots ##
 
 ### Charts ###
* Charts screens provide graphical data of core lifting workouts to see progress.
* Users can search a workout in the input section to see a line chart of progress.
<img src="https://user-images.githubusercontent.com/29931785/166310175-121d60d8-1213-48e9-85b7-bb0b766de85c.png" width="250">


### Journal ###
* A list view of all the user's workouts.  The workouts can be clicked to show all the sets and weight of each individual exercise.
<img src="https://user-images.githubusercontent.com/29931785/166314162-bc722d46-d5bc-4c1d-ae75-5e703acac99e.png" width="250">


### New Workouts ###
* All new entries of are done on the new workout screen.  Users can choose their exercise and the sets and weight for each.
<img src="https://user-images.githubusercontent.com/29931785/166315771-e15a0c6b-5464-4725-a772-f5e6e0f531ab.png" width="250">


### Calendar ###
 * Users can track and plan their routines and click on previous workout days to review old workouts.
<img src="https://user-images.githubusercontent.com/29931785/166316469-9bc76b08-36a7-493f-b6db-3ef74adf8ce9.png" width="250">


### Home ###
* Home screen shows the current workout records if they have data to show.
<img src="https://user-images.githubusercontent.com/29931785/166316534-e9038ecf-f1f2-4343-8750-1d168f048ed6.png" width="250">


### App Navigation and Screen Structure ###


* DrawerScreenNavigatorContainer
  * Login Screen
  * Signup Screen
 
  * TabScreenNavigator
    * HomeStackNavigator
      * HomeScreen
      * LastWorkoutItem
      * LastWorkoutTouchableItem
      * WorkoutRecords
      
    * JournalStackNavigator
      * PrevWorkoutContainer Screen
        * JournalItem
          * TouchableJournalItem 
      * ExerciseListContainer
        * ExerciseItem
    
    * CalenderStackNavigator
       * CalendarScreen
       * SelectedDateScreen
         * SelectedDateItem
    
    * SelectworkoutContainer
      * WorkoutNavigator
        * Chest Screen
        * Arms Screen
        * Legs Screen
        * Shoulders Screen
        * Back Screen
        * WorkoutDropdownSearch Screen
        * Searchbar_keywoards
    * ChartStackScreenNavigator
      * ChartScreenMenu
        * ChartScreen
      
    * WorkoutNavigator
      * SelectWorkoutScreen
 
 ### Database Structure ###
 * Lifts
 
 Item           |     Type
 -------------- | ----------
 id             | integer
 workout_id     | integer
 user_id        | integer 
 weight         | string
 reps           | integer
 name           | string
 exercise_section | string
 created_at     | datetime
 
 * Users
 
  Item           |     Type
 -------------- | ----------
 id             | integer
 password_digest | string 
 username       | string 
 email          | string 

* Workouts 

 Item           |     Type
 -------------- | ----------
 id             | integer 
 user_id        | integer 
 exercise_section | string 
 created_at     | datetime 
 
