import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Projects' icon='idea' />
      </Grid.Row>

      <DatedItem title='Takuino' date='Jan 2017' description='knowledge management platform' position='CEO/CTO' href='https://takuino.com'>
        <p>
          Ideation, software development and marketing of an innovative
          knowledge management platform.
        </p>
      </DatedItem>
      <DatedItem title='Biword' startDate='Feb 2017' endDate='Present' href='https://biword.sophia.science/'>
        <p>
          Co-Ideation, software development and experimental validation
          of a Brain-Computer interface based on binary search.
        </p>
      </DatedItem>
      <DatedItem title='Campus news Bot' startDate='Mar 2015' endDate='Aug 2017'  href='https://campus.services/trento/'>
        <p>
          Co-Ideation, software development and maintenance of a campus wide
          push notification system for the University of Trento.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;