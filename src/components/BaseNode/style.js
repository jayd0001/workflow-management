import styled from 'styled-components'
import { Handle } from 'reactflow'

export const StyledHandle = styled(Handle)`
  background: #1976d2;
  width: 8px;
  height: 8px;
  border: 2px solid white;
`

export const CustomHandle = styled(Handle)`
  background: ${(props) => props.$color || '#1976d2'};
  width: 8px;
  height: 8px;
  border: 2px solid white;
  ${(props) => props.$top !== undefined && `top: ${props.$top};`}
  ${(props) => props.$left !== undefined && `left: ${props.$left};`}
  ${(props) => props.$right !== undefined && `right: ${props.$right};`}
  ${(props) => props.$bottom !== undefined && `bottom: ${props.$bottom};`}
  position: absolute;
`

export const NodeContainer = styled.div`
  background: white;
  border: 2px solid ${(props) => props.borderColor || '#ddd'};
  border-radius: 8px;
  padding: 18px;
  min-width: 200px;
  max-width: 280px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  position: relative;

  &:hover {
    box-shadow: ${(props) =>
      props.$clickable ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};
    transform: ${(props) => (props.$clickable ? 'translateY(-1px)' : 'none')};
  }
`

export const NodeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`

export const NodeIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.color || '#1976d2'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`

export const NodeTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #333;
  flex: 1;
  word-wrap: break-word;
`

export const NodeDescription = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`

export const StatusIndicator = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => {
    switch (props.status) {
      case 'success':
        return '#4caf50'
      case 'error':
        return '#f44336'
      case 'warning':
        return '#ff9800'
      case 'running':
        return '#2196f3'
      default:
        return '#9e9e9e'
    }
  }};
  border: 2px solid white;
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f44336;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s;
  z-index: 10;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`
