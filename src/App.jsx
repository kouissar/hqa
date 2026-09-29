import React, { useState } from 'react';
import { 
  FileText, Zap, Search, CheckCircle, 
  PlayCircle, BarChart2, Shield, Activity 
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
      <header className="navbar">
        <div className="container flex items-center justify-between">
          <div className="brand flex items-center gap-2">
            <div className="logo-icon"></div>
            <h1 className="text-xl font-bold">AQUAONE</h1>
          </div>
          <nav className="nav-links flex gap-4">
            <a href="#">QA Teams</a>
            <a href="#">Business Analysts</a>
            <a href="#">Test Leads</a>
            <a href="#">Product Teams</a>
          </nav>
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

        {/* Workflow Stepper */}
        <section className="workflow-stepper">
          <div className="stepper-track"></div>
          <div className="steps-container grid grid-cols-7 gap-4">
            {WORKFLOW_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <div 
                  key={step.id} 
                  className={`step-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div 
                    className="step-icon-wrapper flex items-center justify-center"
                    style={{ 
                      backgroundColor: isActive ? step.color : 'var(--color-surface)',
                      borderColor: isActive ? step.color : 'var(--border-color)',
                      color: isActive ? 'white' : step.color,
                      boxShadow: isActive ? '0 0 15px ' + step.color + '40' : 'none'
                    }}
                  >
                    <span className="step-number">{index + 1}</span>
                  </div>
                  <div className="step-label-container text-center" style={{ marginTop: '1rem' }}>
                    <h3 className="font-semibold text-base">{step.label}</h3>
                  </div>
                </div>
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
