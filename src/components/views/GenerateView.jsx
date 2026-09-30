import React, { useState } from 'react';
import { 
  Zap, Code, LayoutList, BrainCircuit, LineChart, FileSearch, 
  X, Send, Bot, Sparkles, ChevronRight, Settings, Users, Building, Database, ArrowRight, Save
} from 'lucide-react';

export default function GenerateView() {
  const [activeSubTab, setActiveSubTab] = useState('scenario');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedData, setGeneratedData] = useState(false);

  const handleGenerateData = () => {
    setIsGenerating(true);
    setGeneratedData(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedData(true);
    }, 1500);
  };

  const renderSubNavigation = () => {
    const tabs = [
      { id: 'scenario', label: '1. Test Scenario Generation' },
      { id: 'synthetic', label: '2. Synthetic Test Data Generation' }
    ];

    return (
      <div className="flex items-center gap-4 mb-8">
        {tabs.map((tab, index) => {
          const isActive = activeSubTab === tab.id;
          let styling = "text-muted hover:text-primary cursor-pointer font-semibold";
          if (isActive) styling = "text-primary font-bold bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 cursor-default shadow-sm";

          return (
            <React.Fragment key={tab.id}>
              <div 
                className={"flex items-center gap-2 transition-all " + styling}
                onClick={() => setActiveSubTab(tab.id)}
              >
                {tab.label}
              </div>
              {index < tabs.length - 1 && <ChevronRight size={16} className="text-muted" />}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const renderScenario = () => (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h3 className="text-xl font-bold">AI Test Assistant & Services</h3>
          <p className="text-muted text-sm mt-1">Agentic Engineering, Knowledge Base, and Automated Test Design</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2 shadow-md">
          <Zap size={18} /> Generate Scenarios
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
         <div className="card p-5 flex items-center gap-4 cursor-pointer hover:border-primary transition-all shadow-sm">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700"><BrainCircuit size={24} /></div>
            <div>
               <h4 className="font-bold text-slate-800">Agentic Engineering</h4>
               <p className="text-sm text-muted mt-0.5">Auto-refine BDD specs</p>
            </div>
         </div>
         <div className="card p-5 flex items-center gap-4 cursor-pointer hover:border-primary transition-all shadow-sm">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-700"><LineChart size={24} /></div>
            <div>
               <h4 className="font-bold text-slate-800">Coverage Analysis</h4>
               <p className="text-sm text-muted mt-0.5">85% code coverage predicted</p>
            </div>
         </div>
         <div className="card p-5 flex items-center gap-4 cursor-pointer hover:border-primary transition-all shadow-sm">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700"><FileSearch size={24} /></div>
            <div>
               <h4 className="font-bold text-slate-800">Claim Recommendations</h4>
               <p className="text-sm text-muted mt-0.5">Suggesting 23 edge cases</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="card shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-2 mb-5">
            <LayoutList className="text-primary" />
            <h4 className="font-bold text-lg text-slate-800">Scenario & BDD Generation</h4>
          </div>
          <ul className="flex-col gap-3">
            <li className="p-4 bg-slate-50 rounded-xl border flex justify-between items-center transition-all hover:shadow-md" style={{ borderColor: 'var(--border-color)' }}>
              <div className="text-sm text-slate-700">
                <strong className="text-slate-900 block mb-1">Scenario 1:</strong> Inpatient claim with Medicare primary
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Generated</span>
            </li>
            <li className="p-4 bg-slate-50 rounded-xl border flex justify-between items-center transition-all hover:shadow-md mt-3" style={{ borderColor: 'var(--border-color)' }}>
              <div className="text-sm text-slate-700">
                <strong className="text-slate-900 block mb-1">Scenario 2:</strong> Outpatient claim exceeding authorization limit
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Generated</span>
            </li>
            <li className="p-4 bg-slate-50 rounded-xl border flex justify-between items-center transition-all hover:shadow-md mt-3" style={{ borderColor: 'var(--border-color)' }}>
              <div className="text-sm text-slate-700">
                <strong className="text-slate-900 block mb-1">Scenario 3:</strong> Coordination of benefits (COB) secondary payer
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Generated</span>
            </li>
          </ul>
        </div>

        <div className="card p-0 flex flex-col overflow-hidden shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center justify-between p-4 bg-slate-50 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex items-center gap-2">
               <Code className="text-primary" />
               <h4 className="font-bold text-slate-800">BDD Feature File Preview</h4>
            </div>
            <button className="btn btn-outline btn-sm font-semibold">Edit Spec</button>
          </div>
          <pre className="p-6 flex-1 text-sm overflow-auto" style={{ backgroundColor: '#0f172a', color: '#e2e8f0', minHeight: '250px', fontFamily: 'monospace' }}>
            <code>
{`Feature: Inpatient Claim Adjudication
  As a claims processor
  I want to submit an inpatient claim
  So that it adjudicates according to plan benefits

  Scenario: Medicare Primary
    Given the member is enrolled in "HMO Gold"
    And Medicare is the primary payer
    When I submit an 837I claim for $5000
    Then the claim should process successfully
    And the expected payment should be $1000
    And the ANSI remark codes should map correctly`}
            </code>
          </pre>
        </div>
      </div>

      {/* AI Chatbot Floating Action Button & Panel */}
      <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 50 }}>
        {isChatOpen && (
          <div className="flex flex-col mb-4 animate-fade-in" style={{ 
            width: '420px', 
            height: '600px', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            backgroundColor: '#ffffff', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)', 
            fontFamily: 'Inter, system-ui, sans-serif'
          }}>
            {/* Header */}
            <div className="p-5 flex justify-between items-center" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', color: '#ffffff' }}>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                   <Bot size={24} color="#ffffff" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight tracking-tight text-white m-0">HQA Agent</h4>
                  <span className="text-xs font-medium flex items-center gap-1.5 opacity-90 text-blue-100">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6" style={{ backgroundColor: '#f8fafc' }}>
              <div className="self-start flex gap-3 w-full max-w-[90%]">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white' }}>
                    <Bot size={16} />
                 </div>
                 <div className="p-4 rounded-2xl rounded-tl-none shadow-sm" style={{ backgroundColor: '#ffffff', color: '#334155', fontSize: '14px', lineHeight: '1.6' }}>
                   Hi! I'm your HQA AI Assistant. I can help you query the Knowledge Base, review test scenarios, and generate BDD scenarios. How can I assist you?
                 </div>
              </div>
              <div className="self-end flex gap-3 w-full max-w-[90%] justify-end">
                 <div className="p-4 rounded-2xl rounded-tr-none shadow-md" style={{ backgroundColor: '#2563eb', color: '#ffffff', fontSize: '14px', lineHeight: '1.6' }}>
                   Can you generate scenarios for Jira Epic JRA-102?
                 </div>
              </div>
              <div className="self-start flex gap-3 w-full max-w-[90%]">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white' }}>
                    <Bot size={16} />
                 </div>
                 <div className="p-4 rounded-2xl rounded-tl-none shadow-sm" style={{ backgroundColor: '#ffffff', color: '#334155', fontSize: '14px', lineHeight: '1.6' }}>
                   Certainly. I've analyzed <span className="font-semibold text-blue-600">JRA-102</span>. I've generated 3 new scenarios focusing on Medicare Primary and COB edge cases. You can see them updated in the BDD panel.
                 </div>
              </div>
            </div>
            
            {/* Input */}
            <div className="p-5" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
              <div className="flex gap-3 items-center p-1.5 rounded-full" style={{ backgroundColor: '#f1f5f9' }}>
                <input type="text" placeholder="Message HQA Agent..." className="text-sm py-2 px-4 flex-1 bg-transparent outline-none border-none" style={{ color: '#0f172a' }} />
                <button className="p-2.5 rounded-full transition-transform hover:scale-105" style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
        {!isChatOpen && (
          <div className="flex flex-col items-start gap-3">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="chatbot-fab p-4 rounded-full shadow-2xl transition-all flex items-center justify-center cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)', color: '#ffffff', width: '68px', height: '68px' }}
            >
              <Bot size={32} />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderSynthetic = () => (
    <div className="animate-fade-in flex gap-6" style={{ height: '70vh' }}>
      
      {/* Sidebar: Configuration Form */}
      <div className="card w-1/3 flex flex-col p-6 shadow-sm border" style={{ borderColor: 'var(--border-color)', backgroundColor: '#ffffff' }}>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <Settings className="text-primary" />
          <h3 className="text-xl font-bold text-slate-800">Generation Criteria</h3>
        </div>
        
        <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-5">
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">Data Type</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-slate-600 p-2 border rounded hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="datatype" defaultChecked /> <Users size={16} className="text-blue-500" /> Members / Subscribers
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-600 p-2 border rounded hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="datatype" /> <Building size={16} className="text-purple-500" /> Providers (Billing/Rendering)
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-600 p-2 border rounded hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="datatype" /> <Database size={16} className="text-emerald-500" /> Claims History
              </label>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">Volume / Count</label>
            <input type="number" defaultValue={50} className="form-input w-full" />
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">Demographic Focus</label>
            <select className="form-input w-full">
              <option>National (Randomized)</option>
              <option>California Region</option>
              <option>Medicare Eligible (65+)</option>
              <option>Pediatric</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700 block mb-2">Edge Cases & Rules</label>
            <div className="flex flex-col gap-2">
               <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked /> Include invalid/missing SSNs</label>
               <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked /> Include overlapping coverage</label>
               <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" /> Trigger COB secondary rules</label>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <button 
            onClick={handleGenerateData}
            disabled={isGenerating}
            className="btn btn-primary w-full py-3 shadow-md flex justify-center items-center gap-2 font-bold"
          >
            {isGenerating ? 'Generating...' : <><Zap size={18} /> Generate Synthetic Data</>}
          </button>
        </div>
      </div>

      {/* Main Panel: Data Preview */}
      <div className="card w-2/3 p-0 flex flex-col shadow-sm border" style={{ borderColor: 'var(--border-color)', backgroundColor: '#f8fafc' }}>
         <div className="p-4 bg-white border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex items-center gap-2">
              <Database size={18} className="text-primary" />
              <h4 className="font-bold text-slate-800">Synthetic Data Preview</h4>
            </div>
            <div className="flex gap-2">
               <button className="btn btn-outline btn-sm font-semibold flex items-center gap-1"><ArrowRight size={16}/> Export JSON</button>
               <button className="btn btn-primary btn-sm font-semibold flex items-center gap-1"><Save size={16}/> Save to Test DB</button>
            </div>
         </div>

         <div className="flex-1 p-6 overflow-auto relative">
           {!isGenerating && !generatedData && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Database size={48} className="mb-4 opacity-50" />
                <p>Configure criteria and click generate to preview data.</p>
             </div>
           )}

           {isGenerating && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                <div className="animate-spin mb-4"><Zap size={48} /></div>
                <p className="font-bold animate-pulse">Synthesizing records...</p>
             </div>
           )}

           {generatedData && !isGenerating && (
             <div className="animate-fade-in">
               <h5 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wider">Generated Members (50 Records)</h5>
               <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
                  <thead className="bg-slate-50 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <tr>
                      <th className="p-3 text-xs text-slate-500 font-bold uppercase">Member ID</th>
                      <th className="p-3 text-xs text-slate-500 font-bold uppercase">Name</th>
                      <th className="p-3 text-xs text-slate-500 font-bold uppercase">DOB</th>
                      <th className="p-3 text-xs text-slate-500 font-bold uppercase">State</th>
                      <th className="p-3 text-xs text-slate-500 font-bold uppercase">Flags</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="p-3 font-mono text-sm text-primary font-bold">SYN-MEM-8001</td>
                      <td className="p-3 text-sm text-slate-700 font-semibold">Johnathan Doe</td>
                      <td className="p-3 text-sm text-slate-600">1955-04-12</td>
                      <td className="p-3 text-sm text-slate-600">CA</td>
                      <td className="p-3"><span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-bold">Medicare</span></td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="p-3 font-mono text-sm text-primary font-bold">SYN-MEM-8002</td>
                      <td className="p-3 text-sm text-slate-700 font-semibold">Sarah Smith</td>
                      <td className="p-3 text-sm text-slate-600">1982-11-05</td>
                      <td className="p-3 text-sm text-slate-600">NY</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-bold">Invalid SSN</span></td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="p-3 font-mono text-sm text-primary font-bold">SYN-MEM-8003</td>
                      <td className="p-3 text-sm text-slate-700 font-semibold">Michael Johnson</td>
                      <td className="p-3 text-sm text-slate-600">1990-01-22</td>
                      <td className="p-3 text-sm text-slate-600">TX</td>
                      <td className="p-3"><span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded font-bold">COB (Dual)</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-sm text-primary font-bold">SYN-MEM-8004</td>
                      <td className="p-3 text-sm text-slate-700 font-semibold">Emily Davis</td>
                      <td className="p-3 text-sm text-slate-600">1960-08-30</td>
                      <td className="p-3 text-sm text-slate-600">FL</td>
                      <td className="p-3"><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-bold">Clean</span></td>
                    </tr>
                  </tbody>
               </table>
             </div>
           )}
         </div>
      </div>

    </div>
  );

  return (
    <div className="view-container">
      {renderSubNavigation()}
      {activeSubTab === 'scenario' && renderScenario()}
      {activeSubTab === 'synthetic' && renderSynthetic()}
    </div>
  );
}
