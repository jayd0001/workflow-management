import {
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  ButtonGroup,
  Button,
  ParameterGroup,
  ParameterRow,
  ParameterInput,
  AddParameterButton,
  RemoveParameterButton,
} from './style'
import { useNodeConfig } from './_hooks/useNodeConfig'

export function NodeConfigDrawer({ node, onSave, onClose }) {
  const {
    config,
    parameters,
    handleInputChange,
    handleParameterChange,
    addParameter,
    removeParameter,
  } = useNodeConfig(node)

  const handleSave = () => {
    onSave(node.id, config)
  }

  const renderNodeSpecificFields = () => {
    switch (node.type) {
      case 'start':
        return (
          <>
            <FormGroup>
              <Label>Input Type</Label>
              <Select
                value={config.inputType || 'webhook'}
                onChange={(e) => handleInputChange('inputType', e.target.value)}
              >
                <option value="webhook">Webhook</option>
                <option value="schedule">Schedule</option>
                <option value="manual">Manual</option>
                <option value="api">API</option>
              </Select>
            </FormGroup>
            {config.inputType === 'webhook' && (
              <FormGroup>
                <Label>Webhook URL</Label>
                <Input
                  type="url"
                  value={config.webhookUrl || ''}
                  onChange={(e) => handleInputChange('webhookUrl', e.target.value)}
                  placeholder="https://api.example.com/webhook"
                />
              </FormGroup>
            )}
          </>
        )

      case 'action':
        return (
          <FormGroup>
            <Label>Parameters</Label>
            <ParameterGroup>
              {parameters.map((param, index) => (
                <ParameterRow key={index}>
                  <ParameterInput
                    placeholder="Parameter name"
                    value={param.key}
                    onChange={(e) => handleParameterChange(index, 'key', e.target.value)}
                  />
                  <ParameterInput
                    placeholder="Parameter value"
                    value={param.value}
                    onChange={(e) => handleParameterChange(index, 'value', e.target.value)}
                  />
                  <RemoveParameterButton onClick={() => removeParameter(index)}>
                    Remove
                  </RemoveParameterButton>
                </ParameterRow>
              ))}
              <AddParameterButton onClick={addParameter}>Add Parameter</AddParameterButton>
            </ParameterGroup>
          </FormGroup>
        )

      case 'decision':
        return (
          <>
            <FormGroup>
              <Label>Condition</Label>
              <TextArea
                value={config.condition || ''}
                onChange={(e) => handleInputChange('condition', e.target.value)}
                placeholder="e.g., data.email.includes('@')"
              />
            </FormGroup>
            <FormGroup>
              <Label>True Label</Label>
              <Input
                value={config.trueLabel || ''}
                onChange={(e) => handleInputChange('trueLabel', e.target.value)}
                placeholder="Enter true condition label"
              />
            </FormGroup>
            <FormGroup>
              <Label>False Label</Label>
              <Input
                value={config.falseLabel || ''}
                onChange={(e) => handleInputChange('falseLabel', e.target.value)}
                placeholder="Enter false condition label"
              />
            </FormGroup>
          </>
        )

      case 'terminal':
        return (
          <>
            <FormGroup>
              <Label>Status</Label>
              <Select
                value={config.status || 'success'}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option value="success">Success</option>
                <option value="error">Error</option>
                <option value="warning">Warning</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea
                value={config.message || ''}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Final message or result"
              />
            </FormGroup>
          </>
        )

      default:
        return null
    }
  }

  return (
    <DrawerOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Configure {node.type} Node</DrawerTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </DrawerHeader>

        <FormGroup>
          <Label>Name</Label>
          <Input
            value={config.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Node name"
          />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <TextArea
            value={config.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Node description"
          />
        </FormGroup>

        {renderNodeSpecificFields()}

        <ButtonGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button $primary onClick={handleSave}>
            Save
          </Button>
        </ButtonGroup>
      </DrawerContent>
    </DrawerOverlay>
  )
}
