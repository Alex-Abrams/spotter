// Holds all the routes for each tab and drawer button

import * as React from 'react';

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  JournalStack: 'JournalStack',
  Journal: 'Journal',
  CalendarStack: 'CalendarStack',
  Calendar: 'Calendar',
  WorkoutStack: 'WorkoutStack',
  Workout: 'Workout',
  ChartStack: 'ChartStack',
  Chart: 'Chart',
  Login: 'Login',
  Signup: 'Signup',
  LoginSignupStack: 'LoginSignupStack',
};

import EvilIcons from 'react-native-vector-icons/EvilIcons';


export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    // icon: (focused) =>
    //   <EvilIcons name={"eye"} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"eye"} size={30} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    // icon: (focused) =>
    //   <EvilIcons name={"eye"} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"eye"} size={30} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    // icon: (focused) =>
    //   <EvilIcons name={"eye"} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"eye"} size={30} />,
  },

  {
    name: screens.JournalStack,
    focusedRoute: screens.JournalStack,
    title: 'Journal',
    showInTab: true,
    // showInDrawer: false,
    showInDrawer: true,
    // icon: (focused) =>
    //   <EvilIcons name={"trophy"} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"trophy"} size={30} />,
  },

  {
    name: screens.Journal,
    focusedRoute: screens.JournalStack,
    title: 'Journal',
    showInTab: true,
    showInDrawer: false,
    // icon: (focused) =>
    //   <EvilIcons name={"trophy"} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"trophy"} size={30} />,
  },

  {
    name: screens.CalendarStack,
    focusedRoute: screens.CalendarStack,
    title: 'My Calendar',
    showInTab: true,
    // showInDrawer: false,
    showInDrawer: true,
    // icon: (focused) =>
    //   <EvilIcons name={"bell"} size={30} color={focused ? '#551E18' : '#000'} />,
    icon: () => <EvilIcons name={"bell"} size={30} />,
  },
  {
    name: screens.Calendar,
    focusedRoute: screens.CalendarStack,
    title: 'My Calendar',
    showInTab: false,
    showInDrawer: false,
    // icon: (focused) =>
    //   <EvilIcons name={"bell"} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"bell"} size={30} />,
  },

  {
    name: screens.WorkoutStack,
    focusedRoute: screens.WorkoutStack,
    title: 'New Workout',
    // showInTab: false,
    showInTab: true,
    showInDrawer: true,
    // icon: (focused) =>
    //   <EvilIcons name={'bell'} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"bell"} size={30} />,
  },
  {
    name: screens.Workout,
    focusedRoute: screens.WorkoutStack,
    title: 'New Workout',
    showInTab: false,
    showInDrawer: false,
    // icon: (focused) =>
    //   <EvilIcons name={'bell'} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"bell"} size={30} />,
  },

  {
    name: screens.ChartStack,
    focusedRoute: screens.ChartStack,
    title: 'Chart',
    // showInTab: false,
    showInTab: true,
    showInDrawer: true,
    // icon: (focused) =>
    //   <EvilIcons name={'chart'} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"chart"} size={30} />,
  },
  {
    name: screens.Chart,
    focusedRoute: screens.ChartStack,
    title: 'Chart',
    showInTab: false,
    showInDrawer: false,
    // icon: (focused) =>
    //   <EvilIcons name={'chart'} size={30} color={focused ? '#551E18' : '#000'} />,
    // icon: () => <EvilIcons name={"chart"} size={30} />,
  },
  {
  name: screens.Login,
  focusedRoute: screens.LoginSignupStack,
  title: 'Login',
  showInTab: false,
  showInDrawer: false,
  // icon: (focused) =>
  //   <EvilIcons name={'chart'} size={30} color={focused ? '#551E18' : '#000'} />,
},
{
  name: screens.Signup,
  focusedRoute: screens.LoginSignupStack,
  title: 'Signup',
  showInTab: false,
  showInDrawer: false,
  // icon: (focused) =>
  //   <EvilIcons name={'chart'} size={30} color={focused ? '#551E18' : '#000'} />,
},
{
  name: screens.LoginSignupStack,
  focusedRoute: screens.LoginSignupStack,
  title: 'Welcome',
  showInTab: false,
  showInDrawer: false,
  // icon: (focused) =>
  //   <EvilIcons name={'chart'} size={30} color={focused ? '#551E18' : '#000'} />,
},
];
