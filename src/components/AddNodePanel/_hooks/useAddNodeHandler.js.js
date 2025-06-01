import { useCallback } from 'react'

export function useAddNodeHandler(onAddNode) {
  const handleNodeTypeClick = useCallback(
    (nodeType) => {
      const position = { x: 300, y: 200 }
      onAddNode(nodeType, position)
    },
    [onAddNode]
  )

  return {
    handleNodeTypeClick,
  }
}
