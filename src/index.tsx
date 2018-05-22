import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

import Bio from './Bio'
import Education from './Education'
import Projects from './Projects'
import Awards from './Awards'
import Publications from './Publications'
import Skills from './Skills'
import Volunteering from './Volunteering'
import Interests from './Interests'
import Speaking from './Speaking'

const Document:React.SFC = p => (
  <Grid container divided='vertically' padded='vertically'>
    <Bio />
    <Education />
    <Projects />
    <Publications />
    <Speaking /> 
    <Awards />
    <Volunteering />
    <Skills />
    {/* <Interests />  */}
  </Grid>
)

ReactDOM.render(
  <Document />,
  document.getElementById('root') as HTMLElement
);
