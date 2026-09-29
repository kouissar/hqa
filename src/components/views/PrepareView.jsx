import React from 'react';
import { Search, Database, Copy } from 'lucide-react';

export default function PrepareView() {
  return (
    <div className="view-container animate-fade-in">
      <div className="grid grid-cols-3 gap-8">
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Search className="text-primary" />
            <h3 className="text-xl font-bold">Search Claims</h3>
          </div>
          <div className="flex-col gap-3">
            <input type="text" placeholder="Claim ID or Member ID..." className="p-2 border rounded w-full" style={{ borderColor: 'var(--border-color)' }} />
            <button className="btn btn-outline w-full">Search</button>
          </div>
        </div>

        <div className="card col-span-2">
           <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Database className="text-primary" />
                <h3 className="text-xl font-bold">Claims Data & Synthesis</h3>
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
                 <td className="py-3">Professional</td>
                 <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ready</span></td>
                 <td className="py-3">
                   <button className="text-primary hover:text-primary-light flex items-center gap-1 text-sm"><Copy size={16}/> Clone</button>
                 </td>
               </tr>
               <tr>
                 <td className="py-3">CLM-82911</td>
                 <td className="py-3">Institutional</td>
                 <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Draft</span></td>
                 <td className="py-3">
                   <button className="text-primary hover:text-primary-light flex items-center gap-1 text-sm"><Copy size={16}/> Clone</button>
                 </td>
               </tr>
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
