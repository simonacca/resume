import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Volunteering' icon='users' />
      </Grid.Row>

      <DatedItem title='Arduino Open Day' position='Instructor'
        date='Apr 2016' href='https://day.arduino.cc/'>
        <p>
          A worldwide event bringing together arduino people and projects.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;