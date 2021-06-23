import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Chart = ({ type }) => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart margin={0}>
      <Pie
        data={type}
        dataKey="amount"
        nameKey="category"
        cx="50%"
        cy="50%"
        innerRadius={'50%'}
        outerRadius={'100%'}
        blendStroke
      >
        {type
          ? type.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.bgColor} />
            ))
          : null}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default Chart;
