import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeWelcomeScreenContainer from '../containers/home_welcome_screen_container';
import PrevWorkoutScreenContainer from '../containers/prev_workout_screen_container';
import SelectWorkoutContainer from '../containers/select_workout_container';

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeWelcomeScreenContainer} />
        <Tab.Screen name="Previous Workouts" title="Journal" component={PrevWorkoutScreenContainer} />
        <Tab.Screen name="Workouts" title="New Workout" component={SelectWorkoutContainer} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;


// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;
//
//         const isFocused = state.index === index;
//
//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });
//
//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };
//
//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };
//
//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }
//
// const Tab = createBottomTabNavigator();
//
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
