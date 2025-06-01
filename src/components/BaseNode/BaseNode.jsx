import { memo } from 'react'
import { Position } from 'reactflow'
import { useBaseNode } from './_hooks/useBaseNode'

import {
  NodeContainer,
  NodeHeader,
  NodeIcon,
  NodeTitle,
  NodeDescription,
  StatusIndicator,
  DeleteButton,
  StyledHandle,
  CustomHandle,
} from './style'
export const BaseNode = memo(
  ({
    id,
    data,
    selected,
    icon,
    iconColor,
    borderColor,
    showTargetHandle = true,
    showSourceHandle = true,
    sourceHandles = [],
    targetHandles = [],
    children,
    status,
    $clickable = true,
    onDelete,
  }) => {
    const { handleDelete, computedBorderColor } = useBaseNode({
      id,
      selected,
      borderColor,
      onDelete,
    })

    return (
      <NodeContainer borderColor={computedBorderColor} $clickable={$clickable}>
        {status && <StatusIndicator status={status} />}
        {onDelete && <DeleteButton onClick={handleDelete}>×</DeleteButton>}

        {showTargetHandle && targetHandles.length === 0 && (
          <StyledHandle type="target" position={Position.Left} />
        )}

        {targetHandles.map((handle, index) => (
          <CustomHandle
            key={`target-${index}`}
            type="target"
            position={handle.position || Position.Left}
            id={handle.id}
            $color={handle.color}
            $top={handle.top}
            $left={handle.left}
            $right={handle.right}
            $bottom={handle.bottom}
          />
        ))}

        <NodeHeader>
          <NodeIcon color={iconColor}>{icon}</NodeIcon>
          <NodeTitle>{data.label}</NodeTitle>
        </NodeHeader>

        {data.config?.description && <NodeDescription>{data.config.description}</NodeDescription>}

        {children}

        {showSourceHandle && sourceHandles.length === 0 && (
          <StyledHandle type="source" position={Position.Right} />
        )}

        {sourceHandles.map((handle, index) => (
          <CustomHandle
            key={`source-${index}`}
            type="source"
            position={handle.position || Position.Right}
            id={handle.id}
            $color={handle.color}
            $top={handle.top}
            $left={handle.left}
            $right={handle.right}
            $bottom={handle.bottom}
          />
        ))}
      </NodeContainer>
    )
  }
)
