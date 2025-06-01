import React from 'react'
import ReactFlow, { Background, Controls, MiniMap, Panel } from 'reactflow'
import 'reactflow/dist/style.css'

import { NodeConfigDrawer } from '../NodeConfigDrawer/NodeConfigDrawer'
import { AddNodePanel } from '../AddNodePanel/AddNodePanel'
import { StartNode } from '../nodes/StartNode/StartNode'
import { ActionNode } from '../nodes/ActionNode/ActionNode'
import { DecisionNode } from '../nodes/DecisionNode/DecisionNode'
import { TerminalNode } from '../nodes/TerminalNode/TerminalNode'
import { initialNodes, initialEdges } from '../../constants/constants'
import { Container, Header, Button, InfoBox, ModePanel } from './style'
import { useWorkflowManager } from './_hooks/useWorkflowManager'

export function WorkflowManager() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    isEditMode,
    selectedNode,
    showConfigDrawer,
    showAddPanel,
    handleNodeConfigSave,
    deleteNode,
    clearFlow,
    toggleEditMode,
    onConnect,
    onNodeClick,
    handleAddNode,
    setShowConfigDrawer,
    setSelectedNode,
    setShowAddPanel,
  } = useWorkflowManager(initialNodes, initialEdges)

  const nodeTypes = React.useMemo(
    () => ({
      start: (props) => <StartNode {...props} onDelete={isEditMode ? deleteNode : undefined} />,
      action: (props) => <ActionNode {...props} onDelete={isEditMode ? deleteNode : undefined} />,
      decision: (props) => (
        <DecisionNode {...props} onDelete={isEditMode ? deleteNode : undefined} />
      ),
      terminal: (props) => (
        <TerminalNode {...props} onDelete={isEditMode ? deleteNode : undefined} />
      ),
    }),
    [isEditMode, deleteNode]
  )

  return (
    <Container>
      <Header>
        <Button $primary onClick={toggleEditMode}>
          {isEditMode ? 'View Mode' : 'Edit Mode'}
        </Button>
        {isEditMode && (
          <>
            <Button onClick={() => setShowAddPanel(true)}>Add Node</Button>
            {nodes.length > 0 && <Button onClick={clearFlow}>Clear Flow</Button>}
          </>
        )}
        {!isEditMode && nodes.length > 0 && (
          <InfoBox>
            {nodes.length} node{nodes.length !== 1 ? 's' : ''} in workflow
          </InfoBox>
        )}
      </Header>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
          minZoom: 0.5,
          maxZoom: 1.5,
        }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        minZoom={0.3}
        maxZoom={2}
        nodesDraggable={isEditMode}
        nodesConnectable={isEditMode}
        elementsSelectable={isEditMode}
      >
        <Background />
        <Controls />
        <MiniMap />

        <Panel position="top-right">
          <ModePanel>Mode: {isEditMode ? 'Edit' : 'View'}</ModePanel>
        </Panel>
      </ReactFlow>

      {showConfigDrawer && selectedNode && (
        <NodeConfigDrawer
          node={selectedNode}
          onSave={handleNodeConfigSave}
          onClose={() => {
            setShowConfigDrawer(false)
            setSelectedNode(null)
          }}
        />
      )}

      {showAddPanel && (
        <AddNodePanel onAddNode={handleAddNode} onClose={() => setShowAddPanel(false)} />
      )}
    </Container>
  )
}
