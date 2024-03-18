import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SplineChart = () => {
  const data = [
    { id: 1, month: 'Aug 2019', avgPF: '164', pfIP: 'Incentive' },
    { id: 2, month: 'Dec 2018', avgPF: '175', pfIP: 'Incentive' },
    { id: 3, month: 'Dec 2019', avgPF: '183', pfIP: 'Incentive' },
    { id: 4, month: 'Feb 2019', avgPF: '177', pfIP: 'Incentive' },
    { id: 5, month: 'Jan 2019', avgPF: '172', pfIP: 'Incentive' },
    { id: 6, month: 'Jul 2019', avgPF: '194', pfIP: 'Penalty' },
    { id: 7, month: 'Jun 2019', avgPF: '180', pfIP: 'Incentive' },
    { id: 8, month: 'Mar 2019', avgPF: '190', pfIP: 'Incentive' },
    { id: 9, month: 'May 2019', avgPF: '186', pfIP: 'Incentive' }
  ];

  const options = {
    chart: {
      type: 'areaspline',
      
    },
    title: {
      text: ''
    },
    
    xAxis: {
      categories: data.map(item => item.month),
      
    },
    yAxis: {
      title: {
        text: 'Power factor'
      }
    },
    plotOptions: {
       
      areaspline: {
            fillOpacity: 0.5
        } 
    },
    series: [
      {
        name: 'Month',
        data: data.map(item => parseFloat(item.avgPF)),
      }
    ],
    legend: {
        enabled: false // Hide the legend
      },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SplineChart;
