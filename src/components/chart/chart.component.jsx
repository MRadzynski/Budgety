import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import {
  selectExpenses,
  selectIncome,
} from '../../redux/finance/finance.selectors';

const Chart = ({ type }) => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart margin={0}>
      <Pie
        data={type}
        dataKey="amount"
        nameKey="category"
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={'100%'}
        blendStroke
      >
        {type.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.bgColor} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  income: selectIncome(state),
});

export default connect(mapStateToProps)(Chart);
