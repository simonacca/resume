import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Awards' icon='winner' />
      </Grid.Row>

      <DatedItem title='Hack.Developers' date='Oct 2017' position='Italian government hackaton' href='https://hack.developers.italia.it/'>
        <p>
          Winner of the "Wise turtle" award for the creation of
          a visualization tool for the data & analytics framework at the
          'Team per la trasformazione digitale' of the italian government.
        </p>
      </DatedItem>
      <DatedItem title='Web Summit' date='Nov 2017' href='https://websummit.com/open-source'>
        <p>
          Recipient of a free ticket to the web summit conference,
          awarded for contributions to the open source community.
        </p>
      </DatedItem>
      <DatedItem title='Innovation Award' position='Center for Entrepreneurship - University of Maastricht' date='Feb 2017' href='www.mc4e.nl/launchbase/'>
        <p>
          Honorary certificate awarded to the most innovative startup
          of the LaunchBase pre-incubation programme.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;