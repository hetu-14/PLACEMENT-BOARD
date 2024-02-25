import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Students placed",
      data: [112, 70, 155, 124, 180],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
  }
};
const Stat2 = () => {
  return (
    <Card className="w-4/5 mx-auto my-10 duration-700 hover:scale-110 hover:shadow-xl shadow-lg">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 "
      >

        <div>
          <Typography variant="h4" color="blue-gray">
            <b> Total Students placed in past years
            </b></Typography>

        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}

export default Stat2
