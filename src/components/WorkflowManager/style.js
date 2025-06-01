import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #f5f5f5;
`

export const Header = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.$primary ? '#1976d2' : '#fff')};
  color: ${(props) => (props.$primary ? '#fff' : '#333')};
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.$primary ? '#1565c0' : '#f5f5f5')};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`

export const InfoBox = styled.div`
  background: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ModePanel = styled.div`
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
