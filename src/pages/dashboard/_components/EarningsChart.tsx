import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function EarningsChart() {
    return (
        <div className='border w-full rounded-lg p-4'>
            <div className='space-y-4' style={{ width: '100%' }}>
                <h1 className='font-bold text-foreground text-xl'>Total Earnings</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4b9b6e" stopOpacity={0.5} />
                                <stop offset="50%" stopColor="#4b9b6e" stopOpacity={0.2} />
                                <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" stroke="#3182ce" axisLine={false} tick={{ fontSize: '12px', fill: '#94a3b8', fontWeight: '600' }} />
                        <YAxis stroke="#3182ce" axisLine={false} padding={{ bottom: 20 }} tickLine={false} tick={{ fontSize: '12px', fill: '#94a3b8', fontWeight: '600' }} />
                        <Tooltip cursor={{ stroke: 'red', strokeWidth: 0.2, strokeDasharray: "4 4" }} />
                        <Area type="monotone" dataKey="pv" stroke="#4b9b6e" fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];