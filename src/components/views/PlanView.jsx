import React from 'react';
import { FileText, FolderPlus, Database } from 'lucide-react';

export default function PlanView() {
  return (
    <div className="view-container animate-fade-in">
      <div className="grid grid-cols-3 gap-8">
        <div className="card col-span-2">
          <h3 className="text-xl font-bold mb-4">Requirements & Jira Integration</h3>
          <div className="flex-col gap-4">
            <div className="flex justify-between items-center p-4 border rounded" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-3">
                <FileText className="text-primary" />
                <div>
                  <h4 className="font-semibold">Release 24.1 Features</h4>
                  <p className="text-sm text-muted">Synced from Jira - 12 user stories</p>
                </div>
              </div>
              <button className="btn btn-outline">View Details</button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded" style={{ borderColor: 'var(--border-color)', marginTop: '1rem' }}>
              <div className="flex items-center gap-3">
                <FolderPlus className="text-primary" />
                <div>
                  <h4 className="font-semibold">Source Documents</h4>
                  <p className="text-sm text-muted">Benefit plan PDFs & coverage docs</p>
                </div>
              </div>
              <button className="btn btn-outline">Upload</button>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Release Planning</h3>
          <div className="flex-col gap-2">
            <p className="text-sm"><strong>Status:</strong> <span style={{ color: 'var(--color-step-execute)' }}>Active</span></p>
            <p className="text-sm"><strong>Coverage Target:</strong> 95%</p>
            <p className="text-sm"><strong>Defects Logged:</strong> 0</p>
            
            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-primary" style={{ width: '100%' }}>Sync Requirements</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
