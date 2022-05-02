# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## Spotter Workout Journal ##


* Ruby version
* 2.6.3
* Run `$ bundle install` to install gemfile
* Run `$ npm install ` in the "frontend" folder to install packages
* Run `$ npm start` in "frontend" folder to start expo
* works best on Android v8+

* System dependencies
*   Node version 16.14.2
*   

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
 
 ## Screenshots ##
 
<img src="https://user-images.githubusercontent.com/29931785/166310175-121d60d8-1213-48e9-85b7-bb0b766de85c.png" width="250">
