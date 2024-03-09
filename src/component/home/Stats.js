import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from 'react';
import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "highest packege",
      data: [10, 12, 12, 14, 13.5],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      //comment
      categories: [
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",

      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      tickAmount: 5, // Specify the number of ticks on the y-axis
      min: 0, // Set the minimum value of the y-axis
      max: 15,
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const Stats = () => {
  return (
    <div>
      <br></br>
      <div className='my-10'>
      <h1 className='text-5xl italic font-medium  text-black-600'>Past Year Placement Insights:</h1><h2 className='text-5xl italic font-normal text-black-600'> A Visual Overview of Our Alumni's Career Achievements
</h2></div>
      <Card className="w-4/5 text-center mx-auto mt-10 duration-700 hover:scale-110 hover:shadow-xl shadow-lg">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4"
        >

          <div>
            <Typography variant="h4" color="blue-gray" align="center">
              <b>Past Year Highest pack</b>
            </Typography>

          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
}
// const Stats = () => {
//     return (
//         <div>
//             <h1 className='text-gray-600 text-6xl bold underline bg-slate-400 mt-8'>Have A Seek On Past Year Placement Graphs</h1>
//             <div class="grid grid-cols-3 gap-4 mt-5">
//                 <img src="/images/BarGraph.jpg" alt="bargraph" class="h-80 w-80 object-cover ml-20 " />
//                 <img src="/images/PieChart.jpg" alt="piechart" class="h-80 w-80 object-cover mx-10" />
//                 <img src="/images/BarGraph.jpg" alt="bargraph" class="h-80 w-80 object-cover ml-20 " />
//             </div>

//         </div>
//     )
// }

export default Stats