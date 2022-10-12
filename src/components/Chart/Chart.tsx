import { ChartDataObject } from '../../utils/interfaces';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: ChartDataObject[];
}

const Chart = ({ data }: ChartProps) => (
  <ResponsiveContainer height="100%" width="100%">
    <PieChart>
      <Pie
        blendStroke
        cx="50%"
        cy="50%"
        data={data}
        dataKey="amount"
        innerRadius="50%"
        nameKey="category"
        outerRadius="100%"
      >
        {data?.map((entry, index) => (
          <Cell fill={entry.bgColor} key={`cell-${index}`} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default Chart;
