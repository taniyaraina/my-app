import styled from 'styled-components'

import Header from './global/Header'
import Footer from './global/Footer'

const Container = styled.div`
  min-height: 70vh;
`

const IndexLayout = ({ children }) => (
  <main>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </main>
)

export default IndexLayout
