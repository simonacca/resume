import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Public Speaking' icon='announcement' />
      </Grid.Row>
      <DatedItem title='Intro to AI' position='Ifcoding Maastricht, NL'
        date='May 2018' href='https://simon.accascina.me/slides/ai/'>
        <p>Talk on the basics of AI and machine learning.</p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;