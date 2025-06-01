import { memo } from 'react'
import { Position } from 'reactflow'
import { BaseNode } from '../../BaseNode/BaseNode'
import { TerminalDetails, DetailItem, DetailLabel, MessageText } from './style'

export const TerminalNode = memo(({ id, data, selected, onDelete }) => {
  const isSuccess = data.config?.status === 'success'
  const hasMessage = data.config?.message && data.config.message.length > 0

  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      icon="■"
      iconColor={isSuccess ? '#4caf50' : '#f44336'}
      borderColor={isSuccess ? '#4caf50' : '#f44336'}
      showSourceHandle={false}
      targetHandles={[
        {
          id: 'input',
          position: Position.Left,
          color: isSuccess ? '#4caf50' : '#f44336',
        },
      ]}
      status={data.config?.status || 'success'}
      onDelete={onDelete}
    >
      <TerminalDetails>
        <DetailItem>
          <DetailLabel>Status:</DetailLabel> {data.config?.status || 'end'}
        </DetailItem>

        {hasMessage && (
          <MessageText>
            "
            {data.config.message.length > 25
              ? `${data.config.message.substring(0, 25)}...`
              : data.config.message}
            "
          </MessageText>
        )}
      </TerminalDetails>
    </BaseNode>
  )
})
