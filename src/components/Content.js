import styled from 'styled-components'

const Content = styled.div`
  max-width: ${(props) => props.theme.maxWidths.general};
  padding: 0 ${(props) => props.theme.contentPadding} 6rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.bg};
`

export default Content
