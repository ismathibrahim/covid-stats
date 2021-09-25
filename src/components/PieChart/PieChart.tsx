import { ResponsivePie } from "@nivo/pie";

interface PieChartProps {
  active: number;
  deaths: number;
  confirmed: number;
  recovered: number;
}

const PieChart = ({ active, deaths, confirmed, recovered }: PieChartProps) => {
  const pieData = [
    {
      id: "Recovered",
      label: "Recovered",
      value: recovered,
      color: "hsl(40, 70%, 50%)",
    },
    {
      id: "Deaths",
      label: "Deaths",
      value: deaths,
      color: "hsl(57, 70%, 50%)",
    },
    {
      id: "Confirmed",
      label: "Confirmed",
      value: confirmed,
      color: "hsl(278, 70%, 50%)",
    },
    {
      id: "Active",
      label: "Active",
      value: active,
      color: "hsl(202, 70%, 50%)",
    },
  ];
  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: "color" }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Deaths",
          },
          id: "dots",
        },
        {
          match: {
            id: "Recovered",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
