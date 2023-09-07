import styled from 'styled-components'

export const Input = styled.span`
  vertical-align: top;
  margin: 0;
  padding: ${props => props.padding || '0 0.5rem'};
  min-width: 2rem;
  overflow: hidden;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  box-sizing: border-box;

  border-bottom: ${props => props.borderWidth || '1px'} dashed
    rgba(0, 0, 0, 0.5);
  word-break: break-word;
  outline: none;

  font-size: ${props => props.size || '1rem'};
  color: ${props => props.color || 'color: rgba(0, 0, 0, 0.75)'};
  font-weight: ${props => props.weight || 'normal'};
`
