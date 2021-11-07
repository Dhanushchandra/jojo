("use strict");

Highcharts.chart("container", {
  chart: {
    type: "spline",
    animation: Highcharts.svg,
    // don't animate in old IE
    marginRight: 10,
    events: {
      load: function load() {
        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var wsUri = "wss://stream.binance.com:9443/ws/btcusdt@trade";
          web = new WebSocket(wsUri);

          web.onmessage = (evt) => {
            onMessage(evt);
          };

          function onMessage(evt) {
            object = JSON.parse(evt.data);
            price = object.p;
            return price;
          }

          let newPrice = parseFloat(price).toFixed(2);
          console.log(newPrice);
          let latestPrice = newPrice - newPrice / 100;

          var x = new Date().getTime(),
            // current time
            y = latestPrice;
          series.addPoint([x, y], true, true);
        }, 1000);
      },
    },
  },
  time: {
    useUTC: false,
  },
  title: {
    text: "Bitcoin",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
      minAnnounceInterval: 15000,
      announcementFormatter: function announcementFormatter(
        allSeries,
        newSeries,
        newPoint
      ) {
        if (newPoint) {
          return "New point added. Value: " + newPoint.y;
        }

        return false;
      },
    },
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
  tooltip: {
    headerFormat: "<b>{series.name}</b><br/>",
    pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}",
  },
  legend: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  series: [
    {
      name: "Bitcoin",
      data: (function () {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -12; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random(),
          });
        }

        return data;
      })(),
    },
  ],
});
