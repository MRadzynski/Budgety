import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => (
  <ResponsiveContainer height="100%" width="100%">
    <PieChart margin={0}>
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
