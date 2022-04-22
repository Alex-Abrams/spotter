import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Button } from 'react-native-elements';
import * as chartActions from '../../actions/chart_actions';

class ChartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

 getMonth(created_at) {
   const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
   const dt = new Date(created_at);
   return months[dt.getMonth()];
 }

 renderCharts() {
    const { chart_exercises, exercise } = this.props;
    const filtered_exercises = chart_exercises.filter(exer => exer.name.toUpperCase() === exercise.toUpperCase());

    let label_array = [];
    let weight_array = [];

    if (filtered_exercises.length > 0 ) {

      filtered_exercises.forEach((exer, i) => { // every time the month changes, it adds 1 instance of the month to the x axis labels
        if (i === 0) { // always pushes the starting month 
          label_array.push(`${this.getMonth(exer.created_at)}`);
          weight_array.push(exer.weight);
        } else if (this.getMonth(exer.created_at) !== this.getMonth(filtered_exercises[i -1].created_at)) {
          label_array.push(`${this.getMonth(exer.created_at)}`);
          weight_array.push(exer.weight);
        } else {
          weight_array.push(exer.weight);
          label_array.push("*"); // pushes a star to represent a week within a month
        };
      });

    } else {
      weight_array = [];
    }

    const display_charts_or_na = (weight_array.length > 0) ? (
      <LineChart
        data={{
          labels: label_array,
          datasets: [
            {
              data: weight_array
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={310}
        yAxisLabel=""
        yAxisSuffix="lbs"
        yAxisInterval={1} // optional, defaults to 1
        verticalLabelRotation={75}
        chartConfig={{
          backgroundColor: "#000000",
          backgroundGradientFrom: "#fb8c00", // back from and to the same to be same color background
          backgroundGradientTo: "#313e87", // or have it frad from bottom left to top right different colors
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`, // color of the lline going through middle, slope
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // color of the x, y axis labels
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    ) : (
      <View style={{paddingLeft: 85, color: 'red'}}>
        <Text style={{paddingTop: 40, alignSelf: 'center'}}>(No data for this exercise)</Text>
      </View>
    );

    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        {display_charts_or_na}
      </View>
    );
 }

  render() {
    const { chart_exercises, exercise } = this.props;  //chart_exercises is from container, exercise is passed down

    return(
      <ScrollView horizontal={true}>
        <View>
        {this.renderCharts()}
        </View>
    </ScrollView>
    );
  }
}


export default ChartScreen;
