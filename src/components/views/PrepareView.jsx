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
          
          let styling = "text-muted";
          if (isActive) styling = "text-primary font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200";
          else if (isPast) styling = "text-slate-800 font-semibold cursor-pointer hover:underline";

          return (
            <React.Fragment key={tab.id}>
              <div 
                className={\`flex items-center gap-2 \${styling}\`}
                onClick={() => { if (isPast || (selectedClaim && tab.id === 'clone')) setActiveSubTab(tab.id); }}
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
        <h3 className="text-lg font-bold mb-2">Configure Clones for Base Claim: <span className="text-primary">{selectedClaim}</span></h3>
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
               <li className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}><span>Base Claim:</span> <span className="font-semibold text-primary">{selectedClaim}</span></li>
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
             <div key={num} className={\`p-3 mb-2 rounded-lg cursor-pointer border transition-all \${num === 1 ? 'border-primary bg-blue-50' : 'border-transparent bg-slate-50 hover:bg-slate-100'}\`}>
               <div className="flex justify-between items-center mb-1">
                 <span className="font-bold text-sm text-primary">{selectedClaim}-C0{num}</span>
                 <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">Valid</span>
               </div>
               <div className="text-xs text-muted truncate">Subscriber: SYN-MEM-{8000+num}</div>
             </div>
           ))}
        </div>
        <div className="pt-4 mt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <button className="btn btn-primary w-full shadow-lg">Finalize & Load to Execute</button>
        </div>
      </div>

      {/* Main Panel: EDI / JSON Editor */}
      <div className="card w-2/3 flex flex-col p-0 overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
        <div className="p-4 flex justify-between items-center" style={{ backgroundColor: '#0f172a', color: 'white', borderBottom: '1px solid #334155' }}>
          <div className="flex items-center gap-2">
             <FileEdit size={16} className="text-blue-400"/>
             <span className="font-semibold text-sm">Editor: {selectedClaim}-C01 (837I Raw Segments)</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-ghost btn-sm text-blue-300 hover:text-white">Format</button>
            <button className="btn btn-ghost btn-sm text-blue-300 hover:text-white">Validate</button>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-auto text-sm" style={{ color: '#e2e8f0', fontFamily: 'monospace', lineHeight: '1.6' }}>
          <pre>
{`ISA*00*          *00*          *ZZ*SUBMITTER ID   *ZZ*RECEIVER ID    *231024*1230*^*00501*000000001*0*T*:~
GS*HC*SUBMITTER ID*RECEIVER ID*20231024*1230*1*X*005010X223A2~
ST*837*0001*005010X223A2~
BHT*0019*00*123456789*20231024*1230*CH~
NM1*41*2*JOHN DOE CLINIC*****46*123456789~
PER*IC*JOHN DOE*TE*5555555555~
NM1*40*2*PAYER NAME*****46*987654321~
HL*1**20*1~
PRV*BI*PXC*207Q00000X~
NM1*85*2*JOHN DOE CLINIC*****XX*1234567890~
N3*123 MAIN ST~
N4*ANYTOWN*CA*12345~
REF*EI*123456789~
HL*2*1*22*0~
SBR*P*18*******CI~
NM1*IL*1*SMITH*JOHN****MI*SYN-MEM-8001~
N3*456 OAK ST~
N4*OTHERTOWN*CA*67890~
DMG*D8*19800101*M~
NM1*PR*2*PAYER NAME*****PI*987654321~
CLM*${selectedClaim}-C01*500***11:B:1*Y*A*Y*I~
HI*BK:8901~
LX*1~
SV1*HC:99213*100*UN*1***1~
DTP*472*D8*20231024~`}
          </pre>
        </div>
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
