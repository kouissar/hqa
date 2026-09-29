import React from 'react';
import { Search, Database, Copy } from 'lucide-react';

export default function PrepareView() {
  return (
    <div className="view-container animate-fade-in">
      <div className="grid grid-cols-4 gap-8">
        <div className="card col-span-1 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-6">
            <Search className="text-primary" />
            <h3 className="text-lg font-bold">Search Claims</h3>
          </div>
          <div className="flex-col gap-4">
            <input type="text" placeholder="Claim ID, Member ID..." className="form-input mb-3" />
            <button className="btn btn-primary w-full">Search</button>
            
            <div className="mt-6 pt-6 border-t flex flex-col gap-3" style={{ borderColor: 'var(--border-color)' }}>
               <h4 className="font-semibold text-sm text-muted">Advanced Actions</h4>
               <button className="btn btn-outline w-full text-sm">Bulk Generation</button>
               <button className="btn btn-outline w-full text-sm">837 Segment Preparation</button>
            </div>
          </div>
        </div>

        <div className="card col-span-3">
           <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Database className="text-primary" />
                <h3 className="text-xl font-bold">Claims Data, Edit & Synthesis</h3>
              </div>
              <button className="btn btn-primary">Synthesize New Claim</button>
           </div>
           
           <table className="w-full text-left border-collapse">
             <thead>
               <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                 <th className="pb-2">Claim ID</th>
                 <th className="pb-2">Type</th>
                 <th className="pb-2">Status</th>
                 <th className="pb-2">Actions</th>
               </tr>
             </thead>
             <tbody>
               <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                 <td className="py-3">CLM-82910</td>
                 <td className="py-3">Professional (837P)</td>
                 <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ready</span></td>
                 <td className="py-3">
                   <button className="btn btn-ghost btn-sm flex items-center gap-1"><Copy size={16}/> Clone / Edit</button>
                 </td>
               </tr>
               <tr>
                 <td className="py-3">CLM-82911</td>
                 <td className="py-3">Institutional (837I)</td>
                 <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Draft (Missing Segments)</span></td>
                 <td className="py-3">
                   <button className="btn btn-ghost btn-sm flex items-center gap-1"><Copy size={16}/> Clone / Edit</button>
                 </td>
               </tr>
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
