import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

class GraphMenuScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  100,
                  120,
                  170,
                  190,
                  250,
                  300
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
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
      </View>
    );
  }
}


export default GraphMenuScreen;
