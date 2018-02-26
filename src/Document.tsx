import * as React from 'react'
import { Container } from 'semantic-ui-react'

import Bio from './Bio'
import Education from './Education'
import Projects from './Projects'
import Awards from './Awards'
import Publications from './Publications'
import Skills from './Skills'
import Volunteering from './Volunteering'
import Interests from './Interests'

const App:React.SFC = p => (
  <Container>
    <Bio />
    <Education />
    <Projects />
    <Awards />
    <Publications />
    <Skills />
    <Volunteering />
    <Interests />
  </Container>
)

export default App;