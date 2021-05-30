import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useHistory } from 'react-router-dom';

import { formatCurrency } from '../../redux/finance/finance.utils';

const BalanceChart = ({ data, currency }) => {
  const history = useHistory();

  let renderLabel = function (entry) {
    return formatCurrency(entry.amount, currency);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 20 }}>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="90%"
          startAngle={0}
          endAngle={180}
          innerRadius={60}
          outerRadius={85}
          paddingAngle={1}
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell
              key={`${index}`}
              fill={entry.bgColor}
              onClick={() => history.push(`/${entry.name.toLowerCase()}`)}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;
