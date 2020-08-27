import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const data = [
  {
    name: 'Jan',
    population: 28,
    color: '#003f5c',
    legendFontColor: '#7F7F7F',
        legendFontSize: 15,
  },
  {
    name: 'Feb',
    population: 28,
    color: '#58508d',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Mar',
    population: 28,
    color: '#bc5090',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'April',
    population: 25,
    color: '#ff6361',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'May',
    population: 28,
    color: '#ffa600',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'June',
    population: 28,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const dataUser = [
    {
      name: 'Jan',
      population: 20,
      color: '#003f5c',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Feb',
      population: 18,
      color: '#58508d',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Mar',
      population: 15,
      color: '#bc5090',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'April',
      population: 22,
      color: '#ff6361',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'May',
      population: 12,
      color: '#ffa600',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'June',
      population: 15,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

const Attenace = () => {
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
          />
          <PieChart
            //   hasLegend = {false}
        data={dataUser}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      {/* <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
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
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
        /> */}
    </View>
  );
};

export default Attenace;
