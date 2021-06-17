import React from 'react';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

let innerWidth = window.innerWidth;
let sizeModifier = Math.floor(innerWidth / 1280) / 2;

const ExpensesIncomeBarchart = ({ currency, data }) => {
  const CustomTooltip = ({ active, payload, label, currency }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid black',
            padding: '1rem',
            fontSize: 16 + sizeModifier * 5,
          }}
        >
          <p>{`${label}`}</p>
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ left: -15, top: 7, right: 3, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          tick={{
            fontSize: (sizeModifier + 1) * 10.5,
          }}
        />
        <YAxis
          unit="%"
          tick={{
            fontSize: 12 + sizeModifier * 4,
          }}
        />
        <Tooltip content={<CustomTooltip currency={currency} />} />
        <Bar dataKey="percent">
          {data?.map((entry, index) => (
            <Cell key={index} fill={entry.bgColor} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpensesIncomeBarchart;
