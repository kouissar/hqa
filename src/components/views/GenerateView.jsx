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

      {/* AI Chatbot Floating Action Button & Panel - Left Aligned & Modernized */}
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
            {/* Header - Glassmorphism Style */}
            <div className="p-5 flex justify-between items-center" style={{ 
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', 
              color: '#ffffff'
            }}>
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
            
            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6" style={{ backgroundColor: '#f8fafc' }}>
              
              <div className="self-start flex gap-3 w-full max-w-[90%]">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white' }}>
                    <Bot size={16} />
                 </div>
                 <div className="p-4 rounded-2xl rounded-tl-none shadow-sm" style={{ backgroundColor: '#ffffff', color: '#334155', fontSize: '14px', lineHeight: '1.6' }}>
                   Hi! I'm your HQA AI Assistant. I can help you query the Knowledge Base, review existing test scenarios, and automatically generate BDD scenarios for any Jira requirements. How can I assist you?
                 </div>
              </div>

              <div className="self-end flex gap-3 w-full max-w-[90%] justify-end">
                 <div className="p-4 rounded-2xl rounded-tr-none shadow-md" style={{ backgroundColor: '#2563eb', color: '#ffffff', fontSize: '14px', lineHeight: '1.6' }}>
                   Can you generate scenarios for Jira Epic JRA-102 based on the Inpatient Claims KB?
                 </div>
              </div>

              <div className="self-start flex gap-3 w-full max-w-[90%]">
                 <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white' }}>
                    <Bot size={16} />
                 </div>
                 <div className="p-4 rounded-2xl rounded-tl-none shadow-sm" style={{ backgroundColor: '#ffffff', color: '#334155', fontSize: '14px', lineHeight: '1.6' }}>
                   Certainly. I've analyzed <span className="font-semibold text-blue-600">JRA-102</span> and cross-referenced it with the <span className="font-semibold text-blue-600">Inpatient Claims KB</span>. I've generated 3 new scenarios focusing on Medicare Primary and COB edge cases. You can see them updated in the BDD panel on the right.
                 </div>
              </div>

            </div>
            
            {/* Modern Input Area */}
            <div className="p-5" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
              <div className="flex gap-3 items-center p-1.5 rounded-full" style={{ backgroundColor: '#f1f5f9' }}>
                <input type="text" placeholder="Message HQA Agent..." className="text-sm py-2 px-4 flex-1 bg-transparent outline-none border-none" style={{ color: '#0f172a' }} />
                <button className="p-2.5 rounded-full transition-transform hover:scale-105" style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
                  <Send size={18} />
                </button>
              </div>
              <div className="flex justify-center mt-3 gap-1.5 items-center text-xs text-slate-400">
                 <Sparkles size={12} className="text-blue-500"/> AI can make mistakes. Verify scenarios before testing.
              </div>
            </div>
          </div>
        )}
        
        {!isChatOpen && (
          <div className="flex flex-col items-start gap-3">
            <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg text-sm font-bold text-slate-700 animate-fade-in relative ml-2" style={{ border: '1px solid #e2e8f0' }}>
              Need help? Ask AI!
              <div className="absolute w-3 h-3 bg-white transform rotate-45" style={{ bottom: '-6px', left: '24px', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}></div>
            </div>
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
}
