import React from 'react';
import { CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ValidateView() {
  return (
    <div className="view-container animate-fade-in">
       <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">837 Structure & HIPAA Validation</h3>
        <button className="btn btn-primary">Run Validation Suite</button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="card text-center flex-col items-center justify-center p-4">
          <ShieldCheck size={40} color="var(--color-step-execute)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-md font-bold">HIPAA Compliance</h4>
          <span className="text-green-600 font-bold mt-2 text-sm">100% Passed</span>
        </div>

        <div className="card text-center flex-col items-center justify-center p-4">
          <CheckCircle size={40} color="var(--color-step-execute)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-md font-bold">837 Structure</h4>
          <span className="text-green-600 font-bold mt-2 text-sm">100% Passed</span>
        </div>

        <div className="card text-center flex-col items-center justify-center p-4">
          <AlertTriangle size={40} color="var(--color-step-validate)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-md font-bold">Payer Specific Rules</h4>
          <span className="text-orange-600 font-bold mt-2 text-sm">2 Warnings</span>
        </div>

        <div className="card text-center flex-col items-center justify-center p-4">
          <ShieldCheck size={40} color="var(--color-step-execute)" style={{ marginBottom: '1rem' }} />
          <h4 className="text-md font-bold">Test Management</h4>
          <span className="text-green-600 font-bold mt-2 text-sm">Regression Suites Linked</span>
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
