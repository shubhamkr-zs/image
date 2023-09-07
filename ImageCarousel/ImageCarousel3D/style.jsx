import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 7rem;
`

export const CardWrp = styled.div`
  display: inline-block;
  max-width: 1050px;
  width: 100%;
  height: 450px;
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  will-change: transform;
`

export const Card = styled.div`
  background-color: #eaeaea;
  height: 450px;
  font-size: 10rem;
  color: orangered;
  border: 5px solid white;

  display: flex;
  justify-content: center;
  align-items: center;
`
