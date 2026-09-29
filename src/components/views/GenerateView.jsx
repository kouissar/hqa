import React from 'react';
import { Zap, Code, LayoutList } from 'lucide-react';

export default function GenerateView() {
  return (
    <div className="view-container animate-fade-in">
      <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
        <h3 className="text-xl font-bold">AI Test Scenarios & BDD Generation</h3>
        <button className="btn btn-primary flex items-center gap-2">
          <Zap size={18} /> Generate Scenarios
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <LayoutList className="text-primary" />
            <h4 className="font-bold">Generated Scenarios</h4>
          </div>
          <ul className="flex-col gap-2">
            <li className="p-3 bg-surface-hover rounded border border-color">
              <strong>Scenario 1:</strong> Inpatient claim with Medicare primary
            </li>
            <li className="p-3 bg-surface-hover rounded border border-color" style={{ marginTop: '0.5rem' }}>
              <strong>Scenario 2:</strong> Outpatient claim exceeding authorization limit
            </li>
            <li className="p-3 bg-surface-hover rounded border border-color" style={{ marginTop: '0.5rem' }}>
              <strong>Scenario 3:</strong> Coordination of benefits (COB) secondary payer
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Code className="text-primary" />
            <h4 className="font-bold">BDD Feature File Preview</h4>
          </div>
          <pre className="p-4 rounded text-sm overflow-auto" style={{ backgroundColor: '#1e293b', color: '#e2e8f0', minHeight: '150px' }}>
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
    And the expected payment should be $1000`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
