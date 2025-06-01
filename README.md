# Workflow Management System

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ReactFlow](https://img.shields.io/badge/reactflow-%2307405e.svg?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

A visual workflow management system built with React and ReactFlow that allows users to create, configure, and manage complex workflows with different node types.

## Features

- **Drag-and-drop workflow builder**
- **Multiple node types**:
  - Start Node (workflow entry point)
  - Action Node (perform operations)
  - Decision Node (conditional branching)
  - Terminal Node (workflow endpoints)
- **Node configuration** with custom parameters
- **Visual editing** with real-time preview
- **Toggle between Edit and View modes**
- **Responsive design** with smooth animations
- **Customizable styling** using styled-components

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/workflow-management.git
   cd workflow-management

## Project Structure

```
workflow-management/
├── src/
│   ├── components/
│   │   ├── AddNodePanel/            # Panel for adding new nodes
│   │   ├── BaseNode/                # Base node component with common functionality
│   │   ├── NodeConfigDrawer/        # Configuration panel for nodes
│   │   ├── nodes/                   # Specific node implementations
│   │   │   ├── ActionNode/          # Action node component
│   │   │   ├── DecisionNode/        # Decision node component
│   │   │   ├── StartNode/           # Start node component
│   │   │   └── TerminalNode/        # Terminal node component
│   │   └── WorkflowManager/         # Main workflow management component
│   ├── constants/                   # Application constants and initial data
│   └── App.jsx                      # Main application component
├── public/
└── package.json                     # Project dependencies and scripts
```