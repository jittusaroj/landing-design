import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardChart = () => {
    const columnColors = ['#FF5733', '#ffffff'];
  // Sample data for the two columns
  const data = [
    { category: '$257.88 Your Home',  value1: 10, },
    { category: '$389.39 Similar Home',  value1: 20, },
  ];
  const formatXAxisLabel = (category) => {
    // Split category label into two lines
    console.log({category})
    const lines = category.split(' ');
    return `<tspan >${lines[0]}</tspan><br/><tspan>${lines.slice(1).join(' ')}</tspan>`;
  };
  // Highcharts configuration options
  const options = {
    chart: {
      type: 'column',
      height: 150,
      colors: columnColors
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: data.map(item => item.category),
      visible: true, 
      style: {
        align: 'center' // Align labels to the center
      },
      labels: {
        useHTML: true, // Enable HTML rendering for labels
        formatter: function () {
           return formatXAxisLabel(this.value); // Format category label
        }
      }

    },
    yAxis: {
        title: {
            text: null // Remove y-axis title
          },
          labels: {
            enabled: false // Hide y-axis labels
          },
          gridLineWidth: 0 // Hide y-axis grid lines
    },
    legend: {
        enabled: false // Hide the legend
      },
      
    series: [
      {
        name: null,
        data: data.map(item => item.value1)
      },
    ],
    tooltip:{
        enabled:false // Hide the legend
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DashboardChart;
