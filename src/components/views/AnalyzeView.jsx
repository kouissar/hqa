import React from 'react';
import { BarChart2, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function AnalyzeView() {
  return (
    <div className="view-container animate-fade-in">
      <h3 className="text-xl font-bold mb-6">Financial Reconciliation & Analysis</h3>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="card text-center p-4">
          <span className="text-sm text-muted">Claims Analyzed</span>
          <h4 className="text-2xl font-bold mt-1">12</h4>
        </div>
        <div className="card text-center p-4">
          <span className="text-sm text-muted">Exact Match</span>
          <h4 className="text-2xl font-bold text-green-600 mt-1">10</h4>
        </div>
        <div className="card text-center p-4">
          <span className="text-sm text-muted">Variances</span>
          <h4 className="text-2xl font-bold text-orange-600 mt-1">2</h4>
        </div>
        <div className="card text-center p-4">
          <span className="text-sm text-muted">Financial Impact</span>
          <h4 className="text-2xl font-bold text-red-600 mt-1">$450.00</h4>
        </div>
      </div>

      <div className="card">
        <h4 className="font-bold mb-4">Baseline vs. Actual Comparison</h4>
        <table className="w-full text-left border-collapse text-sm">
             <thead>
               <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                 <th className="pb-2">Claim ID</th>
                 <th className="pb-2">Expected Payment</th>
                 <th className="pb-2">Actual Payment</th>
                 <th className="pb-2">Variance</th>
                 <th className="pb-2">Trend</th>
               </tr>
             </thead>
             <tbody>
               <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                 <td className="py-3">CLM-82910</td>
                 <td className="py-3">$1,200.00</td>
                 <td className="py-3">$1,200.00</td>
                 <td className="py-3">$0.00</td>
                 <td className="py-3 text-green-600"><Minus size={16}/></td>
               </tr>
               <tr>
                 <td className="py-3">CLM-82911</td>
                 <td className="py-3">$850.00</td>
                 <td className="py-3">$400.00</td>
                 <td className="py-3 text-red-600">-$450.00</td>
                 <td className="py-3 text-red-600"><TrendingDown size={16}/></td>
               </tr>
             </tbody>
           </table>
      </div>
    </div>
  );
}
