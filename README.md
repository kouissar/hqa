# Claim QA Platform Mockup

A highly responsive, modern UI mockup for the **Claim QA Platform**—a healthcare payer QA platform. This application simulates a business-friendly claims testing journey, from requirement intake through to evidence, defects, and continuous integration.

## 🚀 Overview

The Claim QA Platform orchestrates and streamlines the complex workflows associated with healthcare claims testing. This mockup demonstrates the "End-to-End Product Workflow" designed for business users (QA Teams, Business Analysts, Test Leads, Product Teams, and Implementation Partners).

### The 7-Step Testing Journey

1. **Plan**: Sync and view release, feature, and defect requirements directly from Jira alongside source documents.
2. **Generate**: Leverage AI to automatically generate test scenarios, BDD feature files, and coverage reports. Features a fully interactive AI Assistant Chatbot and a Synthetic Test Data generation tool.
3. **Prepare**: Search, clone, edit, or synthesize claims and test data specifically designed for segment-level preparation. Features a structured sub-page workflow for step-by-step data configuration.
4. **Validate**: Perform rigorous checks on 837 structures, ensure HIPAA compliance, and validate payer-specific business rules.
5. **Execute**: Submit claims through APIs, file drops, or queues to target adjudication platforms (e.g., Facets, QNXT).
6. **Analyze**: Compare expected vs. actual financial outcomes and baseline results. Features an extensive Recharts-powered executive dashboard tracking pass/fail rates, claim volumes, and automation trends.
7. **Evidence**: Access compliance dashboards, audit trails, defect logs, and reusable regression assets.

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) (scaffolded with [Vite](https://vitejs.dev/))
- **Styling**: Custom, highly responsive Vanilla CSS (implementing modern Material Design principles, glassmorphism, and micro-animations)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 💻 Getting Started

Follow these instructions to run the mockup locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kouissar/hqa.git
   cd hqa
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

## 🎨 Design System

The application leverages a custom CSS design system (`src/index.css`) built to convey a premium, modern SaaS feel. It includes:
- **Color Palette**: Deep Navy Blues, Vibrant Purples, Emeralds, and Slate accents mapped specifically to the 7-step journey.
- **Typography**: Uses the `Inter` font family for clean, highly legible text.
- **Animations**: Includes subtle `fade-in` and hover micro-animations for an interactive and dynamic user experience.

## 📁 Project Structure

```text
hqa/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/
│   │   └── views/         # The 7 workflow phase components
│   │       ├── PlanView.jsx
│   │       ├── GenerateView.jsx
│   │       ├── PrepareView.jsx
│   │       ├── ValidateView.jsx
│   │       ├── ExecuteView.jsx
│   │       ├── AnalyzeView.jsx
│   │       └── EvidenceView.jsx
│   ├── App.jsx            # Main layout and workflow stepper
│   ├── index.css          # Global design system & utility classes
│   └── main.jsx           # React entry point
├── package.json
└── README.md
```

## 🤝 Contributing

This repository currently serves as an initial UI mockup for stakeholder review. As the project evolves into a fully functional MVP (focusing initially on HMO testing + initial connectors), further architectural guidelines will be provided.

---
*Claim QA Platform - Transforming Healthcare Payer Quality Assurance.*
