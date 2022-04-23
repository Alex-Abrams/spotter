# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## Spotter Workout Journal ##


* Ruby version
* 2.6.3
* Run `$ bundle install` to install gemfile

* System dependencies
*   Node version 16.14.2

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
 
 
