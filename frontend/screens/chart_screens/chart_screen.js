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

import SelectDropdown from 'react-native-select-dropdown';
import { Button } from 'react-native-elements';
import * as chartActions from '../../actions/chart_actions';

class ChartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    return(
      <View>

        <View style={{borderWidth: 0.5, width: "50%"}}>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={"Select Exercise"}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </View>

        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  // Math.random() * 100,
                  // Math.random() * 100,
                  // Math.random() * 100,
                  // Math.random() * 100,
                  // Math.random() * 100,
                  // Math.random() * 100
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

      <View>
        <Button
          title="test actions"
          onPress={() => this.props.chartActions.requestChartExercises(this.props.current_user_id, this.props.auth_token)}>
        </Button>
      </View>


      </View>
    );
  }
}


export default ChartScreen;
