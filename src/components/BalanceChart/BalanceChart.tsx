import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../redux/finance/finance.utils';
import { useNavigate } from 'react-router-dom';

interface BalanceChartProps {
  currency: string;
  data: SliceArgs[];
}

type SliceArgs = {
  amount: number;
  bgColor: string;
  name: string;
};

const BalanceChart = ({ currency, data }: BalanceChartProps) => {
  const navigate = useNavigate();

  const innerWidth = window.innerWidth;
  let sizeModifier = Math.floor(innerWidth / 640) - 1;

  if (innerWidth >= 3840) sizeModifier += 5;

  const cellClickHandler = (slice: SliceArgs) => () =>
    navigate(`/${slice.name.toLowerCase()}`);

  const renderLabel = (slice: SliceArgs) =>
    formatCurrency(slice.amount, currency);

  return (
    <ResponsiveContainer height="100%" width="100%">
      <PieChart margin={{ top: 30 }}>
        <Pie
          cx="50%"
          cy={innerWidth >= 1024 ? '75%' : '90%'}
          data={data}
          dataKey="amount"
          endAngle={180}
          innerRadius={innerWidth > 700 ? 100 + 30 * sizeModifier : '60'}
          label={renderLabel}
          nameKey="name"
          outerRadius={innerWidth > 700 ? 150 + 30 * sizeModifier : '85'}
          paddingAngle={1}
          startAngle={0}
        >
          {data.map((slice, index) => {
            return (
              <Cell
                fill={slice.bgColor}
                key={index}
                onClick={cellClickHandler(slice)}
              />
            );
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;
