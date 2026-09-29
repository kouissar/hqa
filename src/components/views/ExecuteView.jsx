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

      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="card">
          <h4 className="font-bold mb-4">Platform Orchestration & Services</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
             <div className="p-2 border rounded text-center"><span className="font-semibold text-primary block">Workflow & Rules</span>Active</div>
             <div className="p-2 border rounded text-center"><span className="font-semibold text-primary block">Tenant Management</span>Tenant B Isolated</div>
             <div className="p-2 border rounded text-center"><span className="font-semibold text-primary block">Synthetic Data</span>12 Claims Built</div>
             <div className="p-2 border rounded text-center"><span className="font-semibold text-primary block">Knowledge Base</span>Synced</div>
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold mb-4">Standard Integration Layer</h4>
          <div className="flex-col gap-3 text-sm">
            <div className="flex justify-between border-b pb-2"><span>Target Platform:</span> <strong>Phase 1: Facets</strong></div>
            <div className="flex justify-between border-b pb-2"><span>Submission Method:</span> <strong>REST / FHIR APIs</strong></div>
            <div className="flex justify-between border-b pb-2"><span>Inbound Routing:</span> <strong>Tenant-specific Adapters</strong></div>
            <div className="flex justify-between pb-2"><span>Outbound Results:</span> <strong>Queues / Events</strong></div>
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
         <p className="text-muted mt-4 text-center">Ready to orchestrate submission of 12 synthesized claims to target platform.</p>
      </div>
    </div>
  );
}
