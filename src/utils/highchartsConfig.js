import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";
import HighchartsBoost from "highcharts/modules/boost";

// Initialize modules
HighchartsMore(Highcharts);
SolidGauge(Highcharts);
HighchartsBoost(Highcharts);

// Set global options
Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
});

export default Highcharts;
