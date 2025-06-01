import { useCallback, useMemo } from 'react'

export function useBaseNode({ id, selected, borderColor, onDelete }) {
  const handleDelete = useCallback(
    (e) => {
      e.stopPropagation()
      if (onDelete) {
        onDelete(id)
      }
    },
    [id, onDelete]
  )

  const computedBorderColor = useMemo(() => {
    return selected ? '#1976d2' : borderColor
  }, [selected, borderColor])

  return {
    handleDelete,
    computedBorderColor,
  }
}
