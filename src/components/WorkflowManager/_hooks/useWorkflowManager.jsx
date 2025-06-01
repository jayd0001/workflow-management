import { useState, useCallback, useMemo } from 'react'
import { useNodesState, useEdgesState, addEdge } from 'reactflow'
import { getDefaultConfig } from '../../../constants/constants'

export function useWorkflowManager(initialNodes, initialEdges) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedNode, setSelectedNode] = useState(null)
  const [showConfigDrawer, setShowConfigDrawer] = useState(false)
  const [showAddPanel, setShowAddPanel] = useState(false)

  const handleNodeConfigSave = useCallback(
    (nodeId, newConfig) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === nodeId) {
            const updatedData = {
              ...node.data,
              config: newConfig,
              label: newConfig.name || node.data.label,
            }
            return { ...node, data: updatedData }
          }
          return node
        })
      )
      setShowConfigDrawer(false)
      setSelectedNode(null)
    },
    [setNodes]
  )

  const deleteNode = useCallback(
    (nodeId) => {
      setNodes((nds) => nds.filter((node) => node.id !== nodeId))
      setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId))
    },
    [setNodes, setEdges]
  )

  const clearFlow = useCallback(() => {
    if (window.confirm('Are you sure you want to delete the entire workflow?')) {
      setNodes([])
      setEdges([])
      setIsEditMode(true)
    }
  }, [setNodes, setEdges])

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => !prev)
    setShowConfigDrawer(false)
    setSelectedNode(null)
  }, [])

  const nodeTypes = useMemo(
    () => ({
      start: (props) => (
        <props.nodeComponent {...props} onDelete={isEditMode ? deleteNode : undefined} />
      ),
      action: (props) => (
        <props.nodeComponent {...props} onDelete={isEditMode ? deleteNode : undefined} />
      ),
      decision: (props) => (
        <props.nodeComponent {...props} onDelete={isEditMode ? deleteNode : undefined} />
      ),
      terminal: (props) => (
        <props.nodeComponent {...props} onDelete={isEditMode ? deleteNode : undefined} />
      ),
    }),
    [isEditMode, deleteNode]
  )

  const onConnect = useCallback(
    (params) => {
      if (isEditMode) {
        setEdges((eds) => addEdge({ ...params, animated: true }, eds))
      }
    },
    [setEdges, isEditMode]
  )

  const onNodeClick = useCallback(
    (event, node) => {
      if (isEditMode) {
        if (!node.data.config) {
          node.data.config = getDefaultConfig(node.type)
        }
        setSelectedNode(node)
        setShowConfigDrawer(true)
      }
    },
    [isEditMode]
  )

  const handleAddNode = useCallback(
    (nodeType, position) => {
      const newNodeId = `node_${Date.now()}`
      const newNode = {
        id: newNodeId,
        type: nodeType,
        position,
        data: {
          label: `New ${nodeType}`,
          config: getDefaultConfig(nodeType),
        },
      }
      setNodes((nds) => [...nds, newNode])
      setShowAddPanel(false)
    },
    [setNodes]
  )

  return {
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
    nodeTypes,
    onConnect,
    onNodeClick,
    handleAddNode,
    setShowConfigDrawer,
    setSelectedNode,
    setShowAddPanel,
  }
}
