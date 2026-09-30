import React, { useState } from 'react';
import { Zap, Code, LayoutList, BrainCircuit, LineChart, FileSearch, MessageSquare, X, Send } from 'lucide-react';

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
          <div className="card shadow-xl flex flex-col mb-4 animate-fade-in" style={{ width: '380px', height: '500px', padding: 0, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            {/* Header */}
            <div className="p-3 flex justify-between items-center" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <div className="flex items-center gap-2">
                <BrainCircuit size={20} />
                <span className="font-bold text-md">HQA AI Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-1 rounded hover:bg-white/20 transition-colors"><X size={18} /></button>
            </div>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 text-sm" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="self-start p-3 rounded-lg rounded-tl-none max-w-[85%]" style={{ backgroundColor: 'var(--color-surface-hover)', border: '1px solid var(--border-color)' }}>
                Hi! I can help you query the Knowledge Base, review existing test scenarios, and automatically generate BDD scenarios for any Jira requirements. How can I assist you?
              </div>
              <div className="self-end p-3 rounded-lg rounded-tr-none max-w-[85%] text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
                Can you generate scenarios for Jira Epic JRA-102 based on the Inpatient Claims KB?
              </div>
              <div className="self-start p-3 rounded-lg rounded-tl-none max-w-[85%]" style={{ backgroundColor: 'var(--color-surface-hover)', border: '1px solid var(--border-color)' }}>
                Certainly. I've analyzed JRA-102 and cross-referenced it with the KB. I've generated 3 new scenarios focusing on Medicare Primary and COB edge cases. You can see them updated in the BDD panel on the left.
              </div>
            </div>
            {/* Input */}
            <div className="p-3 border-t flex gap-2 items-center" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--color-surface)' }}>
              <input type="text" placeholder="Ask about KB or Jira..." className="form-input text-sm py-2 px-3 flex-1" style={{ borderRadius: '9999px' }} />
              <button className="text-white p-2 rounded-full transition-colors" style={{ backgroundColor: 'var(--color-primary)' }}><Send size={16} /></button>
            </div>
          </div>
        )}
        
        {!isChatOpen && (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center float-right"
            style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 4px 14px rgba(30, 64, 175, 0.4)' }}
          >
            <MessageSquare size={28} />
          </button>
        )}
      </div>

    </div>
  );
}
