import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useHistory } from 'react-router-dom';

import { formatCurrency } from '../../redux/finance/finance.utils';

const BalanceChart = ({ data }) => {
  const location = useHistory();

  let renderLabel = function (entry) {
    return formatCurrency(entry.amount);
  };

  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart margin={0}>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="90%"
          startAngle={0}
          endAngle={180}
          innerRadius={75}
          outerRadius={100}
          paddingAngle={1}
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell
              key={`${index}`}
              fill={entry.bgColor}
              onClick={() => location.push(`/${entry.name.toLowerCase()}`)}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;