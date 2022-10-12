import {
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ExpensesIncomeData } from '../../utils/interfaces';
import { formatCurrency } from '../../redux/finance/finance.utils';

interface CustomTooltipParams {
  active?: boolean;
  currency: string;
  label?: string;
  payload?: PayloadData[];
}

interface ExpensesIncomeBarchartData {
  amount: number;
  bgColor: string;
  category: string;
  icon: string;
  id: string;
  percent: number;
}

interface ExpensesIncomeBarchartProps {
  currency: string;
  data: ExpensesIncomeData[];
}

interface PayloadData {
  color?: string;
  dataKey: string;
  formatter?: string;
  name: string;
  payload: ExpensesIncomeBarchartData;
  type?: string;
  unit?: string;
  value: number;
}

const innerWidth = window.innerWidth;
const sizeModifier = Math.floor(innerWidth / 1280) / 2;

const ExpensesIncomeBarchart = ({
  currency,
  data
}: ExpensesIncomeBarchartProps) => {
  const CustomTooltip = ({
    active,
    currency,
    label,
    payload
  }: CustomTooltipParams) => {
    if (active && payload?.length) {
      return (
        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid black',
            fontSize: 16 + sizeModifier * 5,
            padding: '1rem'
          }}
        >
          <p>{label}</p>
          <p>{`Percent: ${payload[0].value}%`}</p>
          <p>{`Value: ${formatCurrency(
            payload[0].payload.amount,
            currency
          )}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer
      height="100%"
      width={data.length > 5 ? `${data.length * 20}%` : '100%'}
    >
      <BarChart data={data} margin={{ bottom: 0, left: -17, right: 3, top: 7 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          interval={window.innerWidth < 1024 ? 0 : 'preserveEnd'}
          tick={
            window.innerWidth >= 1024
              ? {
                  fontSize: (sizeModifier + 1) * 10.5
                }
              : true
          }
        />
        <YAxis
          tick={{
            fontSize: 12 + sizeModifier * 4
          }}
          unit="%"
        />
        <Tooltip content={<CustomTooltip currency={currency} />} />
        <Bar dataKey="percent">
          {data?.map((entry, index) => (
            <Cell fill={entry.bgColor} key={index} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpensesIncomeBarchart;
