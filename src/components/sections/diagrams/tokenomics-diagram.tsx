'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Staking Rewards', value: 75.8 },
  { name: 'Liquidity Provision', value: 10 },
  { name: 'Community Airdrop', value: 4 },
  { name: 'Team Allocation', value: 4 },
  { name: 'DAO Treasury', value: 4 },
  { name: 'Presale', value: 1.4 },
  { name: 'Advisors Allocation', value: 0.8 },
];

const COLORS = ['hsl(var(--primary))', '#6b7280', '#10b981', '#3b82f6', '#ef4444', '#a855f7', '#8b5cf6'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border rounded-lg bg-background/80 backdrop-blur-sm shadow-lg text-foreground">
        <p className="label font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function TokenomicsDiagram() {
  return (
    <div className="relative w-full font-sans">
        <h3 className="text-center font-bold text-2xl mb-6 text-primary">Token Allocation Overview</h3>
        <div className="w-full h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        innerRadius="60%"
                        fill="#8884d8"
                        dataKey="value"
                        paddingAngle={2}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={"hsl(var(--background))"} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                     <Legend 
                        iconType="circle" 
                        layout="vertical" 
                        verticalAlign="middle" 
                        align="right"
                        wrapperStyle={{
                            paddingLeft: '20px',
                            fontSize: '12px',
                        }}
                     />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
