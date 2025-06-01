import { memo } from 'react'
import { Position } from 'reactflow'
import { BaseNode } from '../../BaseNode/BaseNode'
import { StartDetails, DetailItem, DetailLabel } from './style'

export const StartNode = memo(({ id, data, selected, onDelete }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      icon="▶"
      iconColor="#4caf50"
      borderColor="#4caf50"
      showTargetHandle={false}
      sourceHandles={[
        {
          id: 'output',
          position: Position.Right,
          color: '#4caf50',
        },
      ]}
      status="success"
      onDelete={onDelete}
    >
      <StartDetails>
        <DetailItem>
          <DetailLabel>Type:</DetailLabel> {data.config?.inputType || 'webhook'}
        </DetailItem>
        {data.config?.webhookUrl && (
          <DetailItem>
            <DetailLabel>URL:</DetailLabel> {data.config.webhookUrl.substring(0, 20)}...
          </DetailItem>
        )}
      </StartDetails>
    </BaseNode>
  )
})
