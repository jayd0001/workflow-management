import { memo } from 'react'
import { Position } from 'reactflow'
import { BaseNode } from '../../BaseNode/BaseNode'
import {
  DecisionDetails,
  DetailItem,
  DetailLabel,
  BranchLabels,
  TrueLabel,
  FalseLabel,
} from './style'

export const DecisionNode = memo(({ id, data, selected, onDelete }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      icon="?"
      iconColor="#2196f3"
      borderColor="#2196f3"
      showSourceHandle={false}
      sourceHandles={[
        {
          id: 'true',
          position: Position.Bottom,
          color: '#4caf50',
          left: '25%',
        },
        {
          id: 'false',
          position: Position.Bottom,
          color: '#f44336',
          right: '25%',
        },
      ]}
      status="warning"
      onDelete={onDelete}
    >
      <DecisionDetails>
        <DetailItem>
          <DetailLabel>Condition:</DetailLabel>
          {data.config?.condition
            ? data.config.condition.length > 20
              ? `${data.config.condition.substring(0, 20)}...`
              : data.config.condition
            : 'if-else'}
        </DetailItem>

        <BranchLabels>
          <TrueLabel>{data.config?.trueLabel || 'True'}</TrueLabel>
          <FalseLabel>{data.config?.falseLabel || 'False'}</FalseLabel>
        </BranchLabels>
      </DecisionDetails>
    </BaseNode>
  )
})
