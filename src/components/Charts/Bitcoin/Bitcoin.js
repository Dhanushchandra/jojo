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
            setInterval(() => {
              var wsUri = "wss://stream.binance.com:9443/ws/btcusdt@trade";
              var web = new WebSocket(wsUri);

              web.onmessage = (evt) => {
                onMessage(evt);
              };

              function onMessage(evt) {
                var object = JSON.parse(evt.data);
                global.price = object.p;
                return global.price;
              }

              let newPrice = parseFloat(global.price).toFixed(2);
              console.log(newPrice);
              let latestPrice = newPrice - newPrice / 100;

              var x = new Date().getTime(), // current time
                y = latestPrice;

              series.addPoint([x, y], true, true);
            }, 1000);
          },
        },
      },

      title: {
        text: "BPM Chart",
      },
      xAxis: {
        type: "datetime",
        tickPixelInterval: 150,
      },
      yAxis: {
        title: {
          text: "Price",
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: "#808080",
          },
        ],
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
