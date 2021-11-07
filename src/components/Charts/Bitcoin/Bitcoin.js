import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts/highstock";

class Charts extends React.Component {
  componentDidMount(props) {
    Highcharts.chart("container", {
      chart: {
        events: {
          load: function () {
            var series = this.series[0];
            setInterval(async () => {
              var x = new Date().getTime(), // current time
                y = Math.round(Math.random() * 100);

              series.addPoint([x, y], true, true);
            }, 1000);
          },
        },
      },

      title: {
        text: "BPM Chart",
      },

      scrollbar: {
        enabled: false,
      },

      rangeSelector: {
        selected: 1,
      },

      exporting: {
        enabled: false,
      },

      series: [
        {
          name: "Random data",
          data: (function () {
            // generate an array of random data
            var data = [],
              time = new Date().getTime(),
              i;

            for (i = -9; i <= 0; i += 1) {
              data.push([time + i * 1000, Math.round(Math.random() * 100)]);
            }
            return data;
          })(),
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <div id="container">loading </div>
      </div>
    );
  }
}

export default Charts;
