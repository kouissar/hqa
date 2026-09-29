import React from 'react';
import { 
  BarChart2, TrendingUp, TrendingDown, Minus, DollarSign, Activity, AlertCircle, Clock,
  PieChart as PieIcon, LineChart as LineIcon
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';

const trendData = [
  { name: 'Mon', expected: 4000, actual: 4000 },
  { name: 'Tue', expected: 3000, actual: 2950 },
  { name: 'Wed', expected: 2000, actual: 2000 },
  { name: 'Thu', expected: 2780, actual: 2500 },
  { name: 'Fri', expected: 1890, actual: 1890 },
  { name: 'Sat', expected: 2390, actual: 2390 },
  { name: 'Sun', expected: 3490, actual: 3040 },
];

const rootCauseData = [
  { name: 'Member Eligibility', value: 45 },
  { name: 'Provider Network', value: 25 },
  { name: 'Benefit Limits', value: 20 },
  { name: 'Pricing Config', value: 10 },
];

const processingTimeData = [
  { name: '837P', baseline: 120, current: 85 },
  { name: '837I', baseline: 200, current: 140 },
  { name: '837D', baseline: 90, current: 65 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

export default function AnalyzeView() {
  return (
    <div className="view-container animate-fade-in flex-col gap-6" style={{ display: 'flex' }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-2xl font-bold">Financial Reconciliation & Analysis</h3>
          <p className="text-muted text-sm mt-1">Real-time comparison of expected outcomes, baselines, and actual financial results.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline flex items-center gap-2 text-sm"><LineIcon size={16}/> Compare Baselines</button>
          <button className="btn btn-primary flex items-center gap-2 text-sm"><PieIcon size={16}/> Export Executive Report</button>
        </div>
      </div>

      {/* KPI Widgets Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="card flex items-center gap-4 p-5">
           <div className="p-3 bg-blue-100 text-blue-700 rounded-lg"><Activity size={24}/></div>
           <div>
             <span className="text-sm font-semibold text-muted">Total Claims Analyzed</span>
             <h4 className="text-2xl font-bold mt-1">1,248</h4>
             <span className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp size={12}/> +12% this week</span>
           </div>
        </div>
        <div className="card flex items-center gap-4 p-5">
           <div className="p-3 bg-red-100 text-red-700 rounded-lg"><DollarSign size={24}/></div>
           <div>
             <span className="text-sm font-semibold text-muted">Financial Variance</span>
             <h4 className="text-2xl font-bold mt-1">$14,250</h4>
             <span className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1"><TrendingDown size={12}/> 2.4% discrepancy</span>
           </div>
        </div>
        <div className="card flex items-center gap-4 p-5">
           <div className="p-3 bg-orange-100 text-orange-700 rounded-lg"><AlertCircle size={24}/></div>
           <div>
             <span className="text-sm font-semibold text-muted">Defect Rate</span>
             <h4 className="text-2xl font-bold mt-1">3.2%</h4>
             <span className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-1"><TrendingDown size={12}/> Improved by 0.5%</span>
           </div>
        </div>
        <div className="card flex items-center gap-4 p-5">
           <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg"><Clock size={24}/></div>
           <div>
             <span className="text-sm font-semibold text-muted">Avg Adjudication Time</span>
             <h4 className="text-2xl font-bold mt-1">1.2s</h4>
             <span className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-1"><TrendingDown size={12}/> 30% faster</span>
           </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Main Trend Chart */}
        <div className="card col-span-2">
          <h4 className="font-bold mb-6 text-lg">Expected vs. Actual Payment Trend</h4>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e40af" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1e40af" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} tickFormatter={(val) => \`$\${val}\`} />
                <Tooltip 
                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                   formatter={(value) => [\`$\${value}\`]}
                />
                <Legend verticalAlign="top" height={36}/>
                <Area type="monotone" dataKey="expected" name="Expected Payment" stroke="#1e40af" strokeWidth={3} fillOpacity={1} fill="url(#colorExpected)" />
                <Area type="monotone" dataKey="actual" name="Actual Payment" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Root Cause Donut */}
        <div className="card flex flex-col">
          <h4 className="font-bold mb-2 text-lg">Variance Root Cause</h4>
          <div style={{ width: '100%', flex: 1, minHeight: 250 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={rootCauseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {rootCauseData.map((entry, index) => (
                    <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-col gap-2 mt-2">
             {rootCauseData.map((entry, index) => (
               <div key={index} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                     <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS[index] }}></span>
                     <span className="text-muted">{entry.name}</span>
                  </div>
                  <span className="font-bold">{entry.value}%</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Detailed Analysis Table */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-lg">Top Discrepancies (Release 24.1)</h4>
          <button className="btn btn-ghost btn-sm">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
             <thead>
               <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                 <th className="pb-3 font-semibold text-muted">Claim ID / Line</th>
                 <th className="pb-3 font-semibold text-muted">Scenario Category</th>
                 <th className="pb-3 font-semibold text-muted text-right">Expected Payment</th>
                 <th className="pb-3 font-semibold text-muted text-right">Actual Payment</th>
                 <th className="pb-3 font-semibold text-muted text-right">Variance</th>
                 <th className="pb-3 font-semibold text-muted text-center">Status</th>
               </tr>
             </thead>
             <tbody>
               <tr className="hover:bg-slate-50 transition-colors" style={{ borderBottom: '1px solid var(--border-color)' }}>
                 <td className="py-4 font-medium text-primary">CLM-82911 / L01</td>
                 <td className="py-4">Inpatient Auth Limit Exceeded</td>
                 <td className="py-4 text-right">$850.00</td>
                 <td className="py-4 text-right">$400.00</td>
                 <td className="py-4 text-right font-bold text-red-600">-$450.00</td>
                 <td className="py-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">Critical</span></td>
               </tr>
               <tr className="hover:bg-slate-50 transition-colors" style={{ borderBottom: '1px solid var(--border-color)' }}>
                 <td className="py-4 font-medium text-primary">CLM-82945 / L03</td>
                 <td className="py-4">COB Secondary Payer Config</td>
                 <td className="py-4 text-right">$125.00</td>
                 <td className="py-4 text-right">$100.00</td>
                 <td className="py-4 text-right font-bold text-orange-600">-$25.00</td>
                 <td className="py-4 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">Warning</span></td>
               </tr>
               <tr className="hover:bg-slate-50 transition-colors">
                 <td className="py-4 font-medium text-primary">CLM-82988 / L01</td>
                 <td className="py-4">Outpatient Preventive Care</td>
                 <td className="py-4 text-right">$0.00</td>
                 <td className="py-4 text-right">$15.00</td>
                 <td className="py-4 text-right font-bold text-blue-600">+$15.00</td>
                 <td className="py-4 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">Warning</span></td>
               </tr>
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
}
