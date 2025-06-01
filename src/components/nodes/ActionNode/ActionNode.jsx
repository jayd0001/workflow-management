import { memo } from 'react'
import { BaseNode } from '../../BaseNode/BaseNode'
import { ActionDetails, DetailItem, DetailLabel, ParamsList } from './style'

export const ActionNode = memo(({ id, data, selected, onDelete }) => {
  const hasParams = data.config?.parameters && Object.keys(data.config.parameters).length > 0

  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      icon="⚡"
      iconColor="#ff9800"
      borderColor="#ff9800"
      status="running"
      onDelete={onDelete}
    >
      <ActionDetails>
        <DetailItem>
          <DetailLabel>Action:</DetailLabel> {data.config?.actionType || 'transform'}
        </DetailItem>

        {hasParams && (
          <DetailItem>
            <DetailLabel>Params:</DetailLabel>
            <ParamsList>
              {Object.entries(data.config.parameters).map(([key, value], index) => (
                <div key={index}>
                  {key}: {String(value).substring(0, 15)}
                  {String(value).length > 15 ? '...' : ''}
                </div>
              ))}
            </ParamsList>
          </DetailItem>
        )}
      </ActionDetails>
    </BaseNode>
  )
})
