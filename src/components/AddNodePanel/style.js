import styled from 'styled-components'

export const PanelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PanelContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  min-width: 300px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const PanelHeader = styled.div`
  margin-bottom: 20px;
`

export const PanelTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`

export const NodeTypeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
`

export const NodeTypeButton = styled.button`
  padding: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  &:hover {
    border-color: #1976d2;
    background: #f5f9ff;
  }
`

export const NodeTypeIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`

export const NodeTypeName = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`

export const NodeTypeDescription = styled.div`
  font-size: 12px;
  color: #666;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.$primary
      ? `
    background: #1976d2;
    color: white;
    
    &:hover {
      background: #1565c0;
    }
  `
      : `
    background: #f5f5f5;
    color: #333;
    
    &:hover {
      background: #e0e0e0;
    }
  `}
`
