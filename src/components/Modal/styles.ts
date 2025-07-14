import styled from 'styled-components'
import Cores from '../../Cores'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 280px;
    height: 100%;
    max-height: 280px;
    margin-left: 32px;
    margin-right: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
export const ModalContent = styled.div`
  display: flex;
  max-width: 1024px;
  min-height: 344px;
  justify-content: center;
  align-items: center;
  background-color: rgba(230, 103, 103, 1);
  position: relative;
`
export const BtnCloseModal = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  left: 90%;
`

export const ModalTexts = styled.div`
  max-width: 656px;

  h2 {
    margin-left: 24px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-left: 24px;
    margin-right: 32px;
  }
`
export const ModalClose = styled.div`
  display: block;
`
export const ComprarBtn = styled.button`
  background-color: ${Cores.creme};
  color: ${Cores.laranja};
  border: none;
  width: 218px;
  height: 24px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 4px;
  margin-left: 24px;
  font-size: 14px;
`
