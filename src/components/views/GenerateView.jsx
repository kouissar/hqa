import React, { useState } from 'react';
import { Zap, Code, LayoutList, BrainCircuit, LineChart, FileSearch, MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

export default function GenerateView() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="view-container animate-fade-in">
      <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h3 className="text-xl font-bold">AI Test Assistant & Services</h3>
          <p className="text-muted text-sm mt-1">Agentic Engineering, Knowledge Base, and Automated Test Design</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Zap size={18} /> Generate Scenarios
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
         <div className="card p-4 flex items-center gap-3 cursor-pointer hover:border-primary transition-all">
            <div className="p-2 rounded bg-purple-100 text-purple-700"><BrainCircuit size={20} /></div>
            <div>
               <h4 className="font-semibold text-sm">Agentic Engineering</h4>
               <p className="text-xs text-muted">Auto-refine BDD specs</p>
            </div>
         </div>
         <div className="card p-4 flex items-center gap-3 cursor-pointer hover:border-primary transition-all">
            <div className="p-2 rounded bg-blue-100 text-blue-700"><LineChart size={20} /></div>
            <div>
               <h4 className="font-semibold text-sm">Impact & Coverage Analysis</h4>
               <p className="text-xs text-muted">85% code coverage predicted</p>
            </div>
         </div>
         <div className="card p-4 flex items-center gap-3 cursor-pointer hover:border-primary transition-all">
            <div className="p-2 rounded bg-emerald-100 text-emerald-700"><FileSearch size={20} /></div>
            <div>
               <h4 className="font-semibold text-sm">Claim Recommendations</h4>
               <p className="text-xs text-muted">Suggesting 23 edge cases</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <LayoutList className="text-primary" />
            <h4 className="font-bold">Scenario & BDD Generation</h4>
          </div>
          <ul className="flex-col gap-2">
            <li className="p-3 bg-surface-hover rounded border border-color flex justify-between items-center">
              <div>
                <strong>Scenario 1:</strong> Inpatient claim with Medicare primary
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Generated</span>
            </li>
            <li className="p-3 bg-surface-hover rounded border border-color flex justify-between items-center" style={{ marginTop: '0.5rem' }}>
              <div>
                <strong>Scenario 2:</strong> Outpatient claim exceeding authorization limit
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Generated</span>
            </li>
            <li className="p-3 bg-surface-hover rounded border border-color flex justify-between items-center" style={{ marginTop: '0.5rem' }}>
              <div>
                <strong>Scenario 3:</strong> Coordination of benefits (COB) secondary payer
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Generated</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
               <Code className="text-primary" />
               <h4 className="font-bold">BDD Feature File Preview</h4>
            </div>
            <button className="btn btn-ghost btn-sm">Edit Spec</button>
          </div>
          <pre className="p-4 rounded text-sm overflow-auto" style={{ backgroundColor: '#1e293b', color: '#e2e8f0', minHeight: '180px' }}>
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
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}>
        {isChatOpen && (
          <div className="flex flex-col mb-4 animate-fade-in" style={{ width: '400px', height: '600px', borderRadius: '16px', overflow: 'hidden', backgroundColor: 'var(--color-surface)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)' }}>
            {/* Header */}
            <div className="p-4 flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--color-surface)' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                   <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-md leading-tight">HQA Agent</h4>
                  <span className="text-xs text-green-500 font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online</span>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-2 rounded-full hover:bg-slate-100 transition-colors text-muted"><X size={20} /></button>
            </div>
            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 text-sm" style={{ backgroundColor: 'var(--color-background)' }}>
              
              <div className="self-start flex gap-2 w-full max-w-[90%]">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <Bot size={16} />
                 </div>
                 <div className="p-3 rounded-2xl rounded-tl-none" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', color: 'var(--color-text-main)' }}>
                   Hi! I'm your HQA AI Assistant. I can help you query the Knowledge Base, review existing test scenarios, and automatically generate BDD scenarios for any Jira requirements. How can I assist you?
                 </div>
              </div>

              <div className="self-end flex gap-2 w-full max-w-[90%] justify-end">
                 <div className="p-3 rounded-2xl rounded-tr-none text-white shadow-sm" style={{ backgroundColor: 'var(--color-primary)' }}>
                   Can you generate scenarios for Jira Epic JRA-102 based on the Inpatient Claims KB?
                 </div>
              </div>

              <div className="self-start flex gap-2 w-full max-w-[90%]">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <Bot size={16} />
                 </div>
                 <div className="p-3 rounded-2xl rounded-tl-none" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', color: 'var(--color-text-main)' }}>
                   Certainly. I've analyzed <span className="font-semibold text-primary">JRA-102</span> and cross-referenced it with the <span className="font-semibold text-primary">Inpatient Claims KB</span>. I've generated 3 new scenarios focusing on Medicare Primary and COB edge cases. You can see them updated in the BDD panel on the left.
                 </div>
              </div>

            </div>
            {/* Input */}
            <div className="p-4" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--border-color)' }}>
              <div className="flex gap-2 items-center p-1 rounded-full" style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--color-background)' }}>
                <input type="text" placeholder="Ask the HQA Agent..." className="text-sm py-2 px-4 flex-1 bg-transparent outline-none" style={{ color: 'var(--color-text-main)' }} />
                <button className="text-white p-2 rounded-full transition-all hover:scale-105 shadow-sm" style={{ backgroundColor: 'var(--color-primary)' }}><Send size={18} /></button>
              </div>
              <div className="flex justify-center mt-2 gap-1 items-center text-xs text-muted">
                 <Sparkles size={12} className="text-primary"/> AI can make mistakes. Verify scenarios before testing.
              </div>
            </div>
          </div>
        )}
        
        {!isChatOpen && (
          <div className="flex flex-col items-end gap-2">
            <div className="bg-white px-3 py-2 rounded-lg shadow-md text-sm font-semibold text-slate-700 animate-fade-in relative" style={{ border: '1px solid var(--border-color)' }}>
              Need help? Ask AI!
              <div className="absolute w-3 h-3 bg-white transform rotate-45" style={{ bottom: '-6px', right: '24px', borderRight: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}></div>
            </div>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="chatbot-fab text-white p-4 rounded-full shadow-xl transition-all flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: 'var(--color-primary)', width: '64px', height: '64px' }}
            >
              <Bot size={32} />
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
