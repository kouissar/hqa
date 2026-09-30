import React, { useState } from 'react';
import { 
  FileText, Zap, Search, CheckCircle, 
  PlayCircle, BarChart2, Shield, Activity,
  Layers, User, HelpCircle, LogOut
} from 'lucide-react';
import './App.css';

import PlanView from './components/views/PlanView';
import GenerateView from './components/views/GenerateView';
import PrepareView from './components/views/PrepareView';
import ValidateView from './components/views/ValidateView';
import ExecuteView from './components/views/ExecuteView';
import AnalyzeView from './components/views/AnalyzeView';
import EvidenceView from './components/views/EvidenceView';

const WORKFLOW_STEPS = [
  { id: 'plan', label: 'Plan', icon: FileText, color: 'var(--color-step-plan)' },
  { id: 'generate', label: 'Generate', icon: Zap, color: 'var(--color-step-generate)' },
  { id: 'prepare', label: 'Prepare', icon: Search, color: 'var(--color-step-prepare)' },
  { id: 'validate', label: 'Validate', icon: CheckCircle, color: 'var(--color-step-validate)' },
  { id: 'execute', label: 'Execute', icon: PlayCircle, color: 'var(--color-step-execute)' },
  { id: 'analyze', label: 'Analyze', icon: BarChart2, color: 'var(--color-step-analyze)' },
  { id: 'evidence', label: 'Evidence', icon: Shield, color: 'var(--color-step-evidence)' },
];

function App() {
  const [activeStep, setActiveStep] = useState(WORKFLOW_STEPS[0].id);

  const renderActiveView = () => {
    switch(activeStep) {
      case 'plan': return <PlanView />;
      case 'generate': return <GenerateView />;
      case 'prepare': return <PrepareView />;
      case 'validate': return <ValidateView />;
      case 'execute': return <ExecuteView />;
      case 'analyze': return <AnalyzeView />;
      case 'evidence': return <EvidenceView />;
      default: return <PlanView />;
    }
  };

  return (
    <div className="app-layout">
      <header className="navbar shadow-sm" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container flex items-center justify-between">
          
          {/* Enhanced Logo */}
          <div className="brand flex items-center gap-3 cursor-pointer">
            <div className="p-2 rounded-lg flex items-center justify-center shadow-inner" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)', color: 'white' }}>
              <Layers size={24} fill="currentColor" fillOpacity={0.2} />
            </div>
            <h1 className="text-2xl font-black tracking-tight" style={{ color: '#0f172a' }}>Claim QA<span className="text-primary font-light"> Platform</span></h1>
          </div>

          {/* Right Side Menu Items */}
          <div className="flex items-center gap-6">
            
            {/* User Profile */}
            <div className="flex items-center gap-3 pr-6 border-r" style={{ borderColor: 'var(--border-color)' }}>
              <div className="text-right">
                <div className="text-sm text-slate-800"><span className="text-slate-500 font-semibold">User:</span> <span className="font-bold">Mike</span></div>
                <div className="text-xs text-primary"><span className="text-slate-400 font-medium">Role:</span> <span className="font-semibold">QA Engineer</span></div>
              </div>
            </div>

            {/* Actions */}
            <nav className="flex items-center gap-3 ml-2">
              <button className="btn btn-ghost btn-sm flex items-center gap-2 font-semibold">
                Documentation
              </button>
              <button className="btn btn-outline btn-sm flex items-center gap-2 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200 font-semibold">
                <LogOut size={16} /> Logout
              </button>
            </nav>

          </div>

        </div>
      </header>

      <main className="main-content container flex-col gap-8">
        
        {/* Experience Layer Header */}
        <section className="experience-layer text-center">
          <h2 className="text-3xl font-bold" style={{ marginBottom: '1rem' }}>
            End-to-End Product Workflow
          </h2>
          <p className="text-muted text-lg">
            A business-friendly claims testing journey from requirement intake through evidence, defects, and continuous regression.
          </p>
        </section>

        {/* Modern Workflow Tabs */}
        <section className="workflow-tabs-container" style={{ margin: '2rem 0' }}>
          <div className="modern-tabs">
            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <button 
                  key={step.id} 
                  className={`modern-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    backgroundColor: isActive ? step.color : 'transparent',
                    color: isActive ? 'white' : 'var(--color-text-muted)'
                  }}
                >
                  <Icon size={18} className="tab-icon" style={{ opacity: isActive ? 1 : 0.7 }} />
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step Content Area */}
        <section className="step-content card" style={{ minHeight: '300px', marginTop: '2rem' }}>
           <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
             <h2 className="text-2xl font-bold capitalize">{activeStep} Phase</h2>
           </div>
           <div className="content-rendered">
             {renderActiveView()}
           </div>
        </section>

        {/* Continuous Testing Loop Footer */}
        <section className="continuous-loop card" style={{ backgroundColor: '#0f172a', color: 'white', marginTop: '2rem' }}>
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity size={24} color="#3b82f6" />
                <h3 className="font-bold text-lg">CONTINUOUS TESTING LOOP</h3>
              </div>
              <div className="flex gap-4 text-sm font-medium" style={{ color: '#94a3b8' }}>
                 <span>• Scheduled regression</span>
                 <span>• Claims-system health checks</span>
                 <span>• Production baseline comparison</span>
                 <span>• Reusable scenarios</span>
                 <span>• Release readiness</span>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}

export default App;
