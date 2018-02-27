import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Projects' icon='idea' />
      </Grid.Row>

      <DatedItem title='Takuino' startDate='2013' endDate='Present' description='knowledge management platform' position='CEO/CTO' href='https://takuino.com'>
        <p>
          Ideation, software development and marketing of an innovative
          knowledge management platform.
          Takuino is a platform for note taking and sharing based on the web
          (like wikipedia) with a focus on hierarchical organization of knowledge.
        </p>
      </DatedItem>
      <DatedItem title='Biword' description='brain-computer interface' startDate='Nov 2016' endDate='Present' href='https://biword.sophia.science/'>
        <p>
          Co-Ideation, software development and experimental validation
          of a Brain-Computer interface based on binary search.
          Biword allows research subjects to spell words
          by exploiting two mental tasks whose activation is distinguishable via
          realtime analysis of fMRI to iteratively slice the english dictionary until
          it is composed of a single word.
        </p>
      </DatedItem>
      <DatedItem title='SafeTrek' description='outdoor safety app' startDate='Feb 2016' endDate='Apr 2016'>
        <p>
          Ideation and software development
          of an android application for enhancing safety during outdoor activities.
          The app logs the user's position to a remote server and coordinates
          with the emergency services in case the user becomes unresponsive for an
          extended period of time.
        </p>
      </DatedItem>
      <DatedItem title='Campus News Bot' description='push notification system' startDate='Mar 2015' endDate='Aug 2017'  href='https://campus.services/trento/'>
        <p>
          Ideation, software development and maintenance of a campus wide
          push notification system for the University of Trento.
          At peak usage, the system reached 3000 users and managed more than 10000
          daily messages.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;