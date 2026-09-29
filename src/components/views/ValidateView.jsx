import React from 'react';
import { CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ValidateView() {
  return (
    <div className="view-container animate-fade-in">
       <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">837 Structure & HIPAA Validation</h3>
        <button className="btn btn-primary">Run Validation Suite</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="card text-center flex-col items-center justify-center">
          <ShieldCheck size={48} color="var(--color-step-execute)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-lg font-bold">HIPAA Compliance</h4>
          <p className="text-sm text-muted">All claims meet standard requirements.</p>
          <span className="text-green-600 font-bold mt-2">100% Passed</span>
        </div>

        <div className="card text-center flex-col items-center justify-center">
          <CheckCircle size={48} color="var(--color-step-execute)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-lg font-bold">837 Structure</h4>
          <p className="text-sm text-muted">Segment-level preparation validated.</p>
          <span className="text-green-600 font-bold mt-2">100% Passed</span>
        </div>

        <div className="card text-center flex-col items-center justify-center">
          <AlertTriangle size={48} color="var(--color-step-validate)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-lg font-bold">Payer Specific Rules</h4>
          <p className="text-sm text-muted">Custom business rules check.</p>
          <span className="text-orange-600 font-bold mt-2">2 Warnings</span>
        </div>
      </div>

      <div className="card mt-6">
        <h4 className="font-bold mb-4">Validation Logs</h4>
        <div className="bg-surface-hover p-4 rounded border text-sm font-mono" style={{ borderColor: 'var(--border-color)' }}>
           <p className="text-green-700">[OK] Validating ISA segment...</p>
           <p className="text-green-700">[OK] Validating GS segment...</p>
           <p className="text-green-700">[OK] Validating ST segment...</p>
           <p className="text-orange-600">[WARN] CLM05-1 may require specific code for Payer A.</p>
        </div>
      </div>
    </div>
  );
}
