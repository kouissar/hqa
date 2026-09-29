import React from 'react';
import { Shield, FileText, Bug } from 'lucide-react';

export default function EvidenceView() {
  return (
    <div className="view-container animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Evidence & Audit Trail</h3>
        <button className="btn btn-outline flex items-center gap-2">
          <FileText size={18} /> Export PDF Report
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="card col-span-2">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Shield className="text-primary" /> Compliance Dashboard
          </h4>
          <div className="flex justify-between items-center bg-surface-hover p-4 rounded border" style={{ borderColor: 'var(--border-color)' }}>
            <div>
              <p className="font-semibold text-lg">Release 24.1 Readiness</p>
              <p className="text-sm text-muted">Run Date: Today, 14:30 PM</p>
            </div>
            <div className="text-right">
               <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-1">
                 83% Ready
               </span>
               <p className="text-xs text-muted">Pending defect resolution</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Bug className="text-primary" /> Defects Logged
          </h4>
          <ul className="flex-col gap-3">
             <li className="flex justify-between items-center text-sm pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="font-semibold text-red-600">DEF-102</span>
                <span className="text-muted">Payment variance on CLM-82911</span>
                <button className="text-primary hover:underline">View in Jira</button>
             </li>
             <li className="flex justify-between items-center text-sm text-muted">
                No other defects.
             </li>
          </ul>
        </div>

        <div className="card">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <FileText className="text-primary" /> Reusable Assets
          </h4>
          <ul className="flex-col gap-3">
             <li className="flex justify-between items-center text-sm pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="font-semibold">Regression Suite: HMO Scenarios</span>
                <button className="btn btn-primary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>Add to CI</button>
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
