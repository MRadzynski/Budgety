import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useHistory } from 'react-router-dom';

import { formatCurrency } from '../../redux/finance/finance.utils';

const BalanceChart = ({ data, currency }) => {
  const history = useHistory();

  let innerWidth = window.innerWidth;
  let sizeModifier = Math.floor(innerWidth / 640) - 1;

  if (innerWidth >= 3840) sizeModifier += 5;

  let renderLabel = function (entry) {
    return formatCurrency(entry.amount, currency);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 30 }}>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy={innerWidth >= 1024 ? '75%' : '90%'}
          startAngle={0}
          endAngle={180}
          innerRadius={innerWidth > 700 ? 100 + 30 * sizeModifier : '60'}
          outerRadius={innerWidth > 700 ? 150 + 30 * sizeModifier : '85'}
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
