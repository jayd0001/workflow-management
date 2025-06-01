import {
  PanelOverlay,
  PanelContent,
  PanelHeader,
  PanelTitle,
  NodeTypeGrid,
  NodeTypeButton,
  NodeTypeIcon,
  NodeTypeName,
  NodeTypeDescription,
  ButtonGroup,
  Button,
} from './style'

import { nodeTypes } from '../../constants/constants'
import { useAddNodeHandler } from './_hooks/useAddNodeHandler.js'

export function AddNodePanel({ onAddNode, onClose }) {
  const { handleNodeTypeClick } = useAddNodeHandler(onAddNode)

  return (
    <PanelOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <PanelContent>
        <PanelHeader>
          <PanelTitle>Add New Node</PanelTitle>
        </PanelHeader>

        <NodeTypeGrid>
          {nodeTypes.map((nodeType) => (
            <NodeTypeButton key={nodeType.type} onClick={() => handleNodeTypeClick(nodeType.type)}>
              <NodeTypeIcon>{nodeType.icon}</NodeTypeIcon>
              <NodeTypeName>{nodeType.name}</NodeTypeName>
              <NodeTypeDescription>{nodeType.description}</NodeTypeDescription>
            </NodeTypeButton>
          ))}
        </NodeTypeGrid>

        <ButtonGroup>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonGroup>
      </PanelContent>
    </PanelOverlay>
  )
}
