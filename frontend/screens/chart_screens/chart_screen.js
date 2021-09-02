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
  //onDataPointClick -> see this
  // consider a shadow under the line (like it makes a mountain)

  render() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"];

    const dt = new Date("2021-05-05T20:29:52.759Z");
    const the_day = dt.getMonth(); // 0 is january
    // console.log("the_day", the_day);
    // labels: ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"],

    const { chart_exercises } = this.props;

    console.log("chart exercises", chart_exercises);
    return(
      <ScrollView horizontal={true}>
        <LineChart
          data={{
            // labels: ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"],
            // labels: ["1", "2", "3", "4 feb"],
            // labels: ["jan", "feb", "march"],
            labels: countries,
            datasets: [
              {
                data: [
                  1,
                  12,
                  19,
                  19,
                  19,
                  21,
                  23,
                  24,
                  25,
                  23,
                  25
                ]
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
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00", // back from and to the same to be same color background
            backgroundGradientTo: "#ffa726", // or have it frad from bottom left to top right different colors
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`, // color of the lline going through middle, slope
            labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`, // color of the x, y axis labels
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
    </ScrollView>
    );
  }
}


export default ChartScreen;
