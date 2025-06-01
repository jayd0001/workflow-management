export const initialNodes = [
  {
    id: '1',
    type: 'start',
    position: { x: 100, y: 100 },
    data: {
      label: 'Start',
      config: {
        name: 'Workflow Start',
        description: 'Entry point for the workflow',
        inputType: 'webhook',
        webhookUrl: 'https://api.example.com/webhook',
      },
    },
  },
  {
    id: '2',
    type: 'action',
    position: { x: 300, y: 100 },
    data: {
      label: 'Process Data',
      config: {
        name: 'Data Processing',
        description: 'Process incoming data',
        actionType: 'transform',
        parameters: {
          field: 'email',
          operation: 'validate',
        },
      },
    },
  },
  {
    id: '3',
    type: 'decision',
    position: { x: 500, y: 100 },
    data: {
      label: 'Valid Email?',
      config: {
        name: 'Email Validation',
        description: 'Check if email is valid',
        condition: 'email.isValid === true',
        trueLabel: 'Valid',
        falseLabel: 'Invalid',
      },
    },
  },
  {
    id: '4',
    type: 'action',
    position: { x: 400, y: 250 },
    data: {
      label: 'Send Welcome',
      config: {
        name: 'Send Welcome Email',
        description: 'Send welcome email to user',
        actionType: 'email',
        parameters: {
          template: 'welcome',
          recipient: '{{email}}',
        },
      },
    },
  },
  {
    id: '5',
    type: 'terminal',
    position: { x: 600, y: 250 },
    data: {
      label: 'Success',
      config: {
        name: 'Success End',
        description: 'Workflow completed successfully',
        status: 'success',
        message: 'User onboarded successfully',
      },
    },
  },
  {
    id: '6',
    type: 'terminal',
    position: { x: 700, y: 100 },
    data: {
      label: 'Error',
      config: {
        name: 'Error End',
        description: 'Workflow ended with error',
        status: 'error',
        message: 'Invalid email provided',
      },
    },
  },
]

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', sourceHandle: 'true', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e3-6', source: '3', target: '6', sourceHandle: 'false', animated: true },
]
export const getDefaultConfig = (nodeType) => {
  switch (nodeType) {
    case 'start':
      return {
        name: 'New Start Node',
        description: '',
        inputType: 'webhook',
        webhookUrl: '',
      }
    case 'action':
      return {
        name: 'New Action Node',
        description: '',
        actionType: 'transform',
        parameters: {},
      }
    case 'decision':
      return {
        name: 'New Decision Node',
        description: '',
        condition: '',
        trueLabel: 'Yes',
        falseLabel: 'No',
      }
    case 'terminal':
      return {
        name: 'New Terminal Node',
        description: '',
        status: 'success',
        message: '',
      }
    default:
      return {}
  }
}
export const nodeTypes = [
  {
    type: 'start',
    icon: '▶',
    name: 'Start Node',
    description: 'Entry point for workflow',
  },
  {
    type: 'action',
    icon: '⚡',
    name: 'Action Node',
    description: 'Perform an action',
  },
  {
    type: 'decision',
    icon: '?',
    name: 'Decision Node',
    description: 'Conditional branching',
  },
  {
    type: 'terminal',
    icon: '■',
    name: 'Terminal Node',
    description: 'End of workflow',
  },
]
