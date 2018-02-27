import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Volunteering' icon='users' />
      </Grid.Row>

      <DatedItem title='Arduino Open Day' position='MUSE, Trento, IT'
        date='Apr 2016' href='https://day.arduino.cc/'>
        <p>
          A worldwide event where Arduino enthusiasts share their projects with the public.
          I contributed to the event by teaching several introductory
          classes to the Arduino platform and electronics in general.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;