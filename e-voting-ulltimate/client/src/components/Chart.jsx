import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default function Chart({ data }) {
  return (
    <BarChart width={300} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="votes" />
    </BarChart>
  );
}