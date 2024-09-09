import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 10],
  ["Eat", 2],
  ["Study", 3],
  ["Read", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

function App() {
  return (
    <Chart
      className='chart'
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
