import styled from 'styled-components'

export const DecisionDetails = styled.div`
  font-size: 11px;
  color: #666;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const DetailLabel = styled.span`
  font-weight: 500;
`

export const BranchLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 10px;
`

export const TrueLabel = styled.div`
  color: #4caf50;
  font-weight: 500;
`

export const FalseLabel = styled.div`
  color: #f44336;
  font-weight: 500;
`
