import React, { useState } from 'react';
import { Search, Database, Copy, ChevronRight, Settings, FileEdit, CheckCircle, ArrowRight } from 'lucide-react';

export default function PrepareView() {
  const [activeSubTab, setActiveSubTab] = useState('search');
  const [selectedClaim, setSelectedClaim] = useState(null);

  const handleSelectClaim = (claimId) => {
    setSelectedClaim(claimId);
    setActiveSubTab('clone');
  };

  const handleProceedToEdit = () => {
    setActiveSubTab('edit');
  };

  const renderSubNavigation = () => {
    const tabs = [
      { id: 'search', label: '1. Search Claims' },
      { id: 'clone', label: '2. Clone Claims' },
      { id: 'edit', label: '3. Edit & Load' }
    ];

    return (
      <div className="flex items-center gap-4 mb-8">
        {tabs.map((tab, index) => {
          const isActive = activeSubTab === tab.id;
          const isPast = tabs.findIndex(t => t.id === activeSubTab) > index;
          
          let styling = "text-muted hover:text-primary cursor-pointer";
          if (isActive) styling = "text-primary font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200 cursor-default";
          else if (isPast) styling = "text-slate-800 font-semibold cursor-pointer hover:underline";

          return (
            <React.Fragment key={tab.id}>
              <div 
                className={"flex items-center gap-2 transition-all " + styling}
                onClick={() => { 
                  if (!selectedClaim) setSelectedClaim('CLM-82910');
                  setActiveSubTab(tab.id); 
                }}
              >
                {isPast && <CheckCircle size={16} className="text-green-500" />}
                {tab.label}
              </div>
              {index < tabs.length - 1 && <ChevronRight size={16} className="text-muted" />}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const renderSearch = () => (
    <div className="animate-fade-in flex flex-col gap-6">
      <div className="card w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Search className="text-primary" />
            <h3 className="text-lg font-bold">Search & Select Base Claims</h3>
          </div>
          <div className="flex gap-3">
             <button className="btn btn-outline text-sm">Bulk Generation</button>
             <button className="btn btn-outline text-sm">837 Segment Preparation</button>
          </div>
        </div>
        <div className="flex gap-4">
          <input type="text" placeholder="Search by Claim ID, Member ID, or Provider NPI..." className="form-input flex-1" />
          <button className="btn btn-primary px-8">Search</button>
        </div>
      </div>

      <div className="card w-full">
         <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Database className="text-primary" />
              <h3 className="text-xl font-bold">Claims Data Repository</h3>
            </div>
            <button className="btn btn-primary">Synthesize New Base Claim</button>
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
             <tr className="hover:bg-slate-50 transition-colors cursor-pointer" style={{ borderBottom: '1px solid var(--border-color)' }}>
               <td className="py-3 font-semibold text-primary">CLM-82910</td>
               <td className="py-3">Professional (837P)</td>
               <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-semibold">Ready</span></td>
               <td className="py-3">
                 <button onClick={() => handleSelectClaim('CLM-82910')} className="btn btn-ghost btn-sm flex items-center gap-2"><ArrowRight size={16}/> Select & Proceed</button>
               </td>
             </tr>
             <tr className="hover:bg-slate-50 transition-colors cursor-pointer" style={{ borderBottom: '1px solid var(--border-color)' }}>
               <td className="py-3 font-semibold text-primary">CLM-82911</td>
               <td className="py-3">Institutional (837I)</td>
               <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-semibold">Draft (Missing Segments)</span></td>
               <td className="py-3">
                 <button onClick={() => handleSelectClaim('CLM-82911')} className="btn btn-ghost btn-sm flex items-center gap-2"><ArrowRight size={16}/> Select & Proceed</button>
               </td>
             </tr>
           </tbody>
         </table>
      </div>
    </div>
  );

  const renderClone = () => (
    <div className="animate-fade-in flex flex-col gap-6">
      <div className="card w-full border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
        <h3 className="text-lg font-bold mb-2">Configure Clones for Base Claim: <span className="text-primary">{selectedClaim || 'CLM-82910'}</span></h3>
        <p className="text-sm text-muted">Generate multiple variations of this base claim using synthetic data substitution.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="card">
          <div className="flex items-center gap-2 mb-6 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
            <Settings className="text-primary" />
            <h4 className="font-bold">Permutation Settings</h4>
          </div>
          
          <div className="flex-col gap-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">Number of Copies</label>
              <input type="number" defaultValue={5} className="form-input w-full" />
            </div>
            
            <div className="mt-4">
              <label className="text-sm font-semibold text-slate-700 block mb-2">Member ID Substitution</label>
              <select className="form-input w-full">
                <option>Randomize from Synthetic Pool</option>
                <option>Use specific Member ID list...</option>
                <option>Keep original</option>
              </select>
            </div>
            
            <div className="mt-4">
              <label className="text-sm font-semibold text-slate-700 block mb-2">Date Shifting</label>
              <select className="form-input w-full">
                <option>Shift all service dates forward 30 days</option>
                <option>Current Date</option>
                <option>Keep original</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card flex flex-col justify-between" style={{ backgroundColor: 'var(--color-surface-hover)' }}>
           <div>
             <h4 className="font-bold mb-4">Summary</h4>
             <ul className="text-sm flex flex-col gap-3">
               <li className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}><span>Base Claim:</span> <span className="font-semibold text-primary">{selectedClaim || 'CLM-82910'}</span></li>
               <li className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}><span>Total Clones to Generate:</span> <span className="font-semibold">5</span></li>
               <li className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}><span>Data Action:</span> <span className="font-semibold text-green-600">Synthetic Permutations Applied</span></li>
             </ul>
           </div>
           
           <button onClick={handleProceedToEdit} className="btn btn-primary w-full py-3 mt-8 shadow-lg hover:shadow-xl transition-all font-bold text-md">
             Generate Clones & Proceed
           </button>
        </div>
      </div>
    </div>
  );

  const renderEdit = () => (
    <div className="animate-fade-in flex gap-6" style={{ height: '70vh' }}>
      {/* Sidebar: List of Clones */}
      <div className="card w-1/3 flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 mb-4 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
          <Copy className="text-primary" />
          <h4 className="font-bold">Generated Clones</h4>
        </div>
        <div className="flex-1 overflow-y-auto pr-2">
           {[1,2,3,4,5].map(num => (
             <div key={num} className={"p-3 mb-2 rounded-lg cursor-pointer border transition-all " + (num === 1 ? 'border-primary bg-blue-50' : 'border-transparent bg-slate-50 hover:bg-slate-100')}>
               <div className="flex justify-between items-center mb-1">
                 <span className="font-bold text-sm text-primary">{selectedClaim || 'CLM-82910'}-C0{num}</span>
                 <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">Valid</span>
               </div>
               <div className="text-xs text-muted truncate">Subscriber: SYN-MEM-{8000+num}</div>
             </div>
           ))}
        </div>
        <div className="pt-4 mt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <button className="btn btn-primary w-full shadow-lg">Load to Engine</button>
        </div>
      </div>

      {/* Main Panel: Structured Form Editor */}
      <div className="card w-2/3 flex flex-col p-0 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        <div className="p-4 flex justify-between items-center" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)' }}>
          <div className="flex items-center gap-2">
             <FileEdit size={16} className="text-primary"/>
             <span className="font-semibold text-sm">Editing: {selectedClaim || 'CLM-82910'}-C01</span>
          </div>
          <div className="flex gap-2 bg-slate-200 p-1 rounded-lg">
            <button className="px-3 py-1 text-xs font-bold rounded bg-white shadow-sm text-primary">Structured Form</button>
            <button className="px-3 py-1 text-xs font-semibold text-muted hover:text-slate-700 transition-colors">Raw X12 (837)</button>
          </div>
        </div>

        <div className="p-6 flex-1 overflow-auto text-sm">
           <h4 className="font-bold text-lg mb-4 text-slate-800">Claim Header (837I)</h4>
           <div className="grid grid-cols-2 gap-5 mb-8">
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Billing Provider NPI (NM109)</label>
                <input type="text" className="form-input" defaultValue="123456789" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Subscriber ID (NM109)</label>
                <input type="text" className="form-input" defaultValue="SYN-MEM-8001" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Total Claim Charge (CLM02)</label>
                <input type="text" className="form-input font-bold text-slate-800" defaultValue="$500.00" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Principal Diagnosis (HI01-2)</label>
                <input type="text" className="form-input" defaultValue="J01.90" />
              </div>
           </div>

           <h4 className="font-bold text-lg mb-4 border-t pt-6 text-slate-800" style={{ borderColor: 'var(--border-color)' }}>Service Lines (SV2)</h4>
           <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border" style={{ borderColor: 'var(--border-color)' }}>
                <tr>
                  <th className="p-3 text-xs text-slate-500 font-bold uppercase tracking-wider">Line</th>
                  <th className="p-3 text-xs text-slate-500 font-bold uppercase tracking-wider">Revenue Code</th>
                  <th className="p-3 text-xs text-slate-500 font-bold uppercase tracking-wider">HCPCS</th>
                  <th className="p-3 text-xs text-slate-500 font-bold uppercase tracking-wider">Charge</th>
                </tr>
              </thead>
              <tbody className="border" style={{ borderColor: 'var(--border-color)' }}>
                <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                  <td className="p-3 font-semibold text-slate-700">1</td>
                  <td className="p-3"><input type="text" className="form-input py-1.5 px-2" defaultValue="0450" /></td>
                  <td className="p-3"><input type="text" className="form-input py-1.5 px-2" defaultValue="99283" /></td>
                  <td className="p-3"><input type="text" className="form-input py-1.5 px-2 font-semibold" defaultValue="$300.00" /></td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700">2</td>
                  <td className="p-3"><input type="text" className="form-input py-1.5 px-2" defaultValue="0250" /></td>
                  <td className="p-3"><input type="text" className="form-input py-1.5 px-2" defaultValue="J3490" /></td>
                  <td className="p-3"><input type="text" className="form-input py-1.5 px-2 font-semibold" defaultValue="$200.00" /></td>
                </tr>
              </tbody>
           </table>
        </div>
    </div>
  );

  return (
    <div className="view-container">
      {renderSubNavigation()}
      
      {activeSubTab === 'search' && renderSearch()}
      {activeSubTab === 'clone' && renderClone()}
      {activeSubTab === 'edit' && renderEdit()}
    </div>
  );
}
