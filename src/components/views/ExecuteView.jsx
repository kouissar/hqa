import React from 'react';
import { Play, Server, ArrowRight } from 'lucide-react';

export default function ExecuteView() {
  return (
    <div className="view-container animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Execution Service</h3>
        <button className="btn btn-primary flex items-center gap-2">
          <Play size={18} /> Execute Batch
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="card">
          <h4 className="font-bold mb-4">Submission Configuration</h4>
          <div className="flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-muted block mb-1">Target Adjudication Platform</label>
              <select className="w-full p-2 border rounded" style={{ borderColor: 'var(--border-color)' }}>
                <option>Phase 1: Facets</option>
                <option>Phase 1: QNXT</option>
                <option>Later: HealthEdge</option>
                <option>Later: Epic</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-muted block mb-1">Submission Method</label>
              <select className="w-full p-2 border rounded" style={{ borderColor: 'var(--border-color)' }}>
                <option>REST / FHIR APIs</option>
                <option>837 File Drop</option>
                <option>Queues / Events</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card flex-col justify-center items-center">
           <div className="flex items-center gap-4 text-primary">
              <Server size={48} />
              <ArrowRight size={32} />
              <div className="text-center">
                <div className="p-3 bg-surface-hover rounded-full border mb-2" style={{ borderColor: 'var(--border-color)' }}>
                  <Server size={48} className="text-secondary" />
                </div>
                <span className="font-bold">Facets</span>
              </div>
           </div>
           <p className="text-muted mt-4 text-center">Ready to submit 12 synthesized claims to target platform.</p>
        </div>
      </div>
    </div>
  );
}
