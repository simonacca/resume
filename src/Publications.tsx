import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Publications' icon='compose' />
      </Grid.Row>

      <DatedItem
        title='Whole-word encoding paradigm for fMRI-based communication: a divide-and-conquer approach'
        position='Authors: S. Snipes, D. Kurban, S. Accascina, B. A. Poser, B.Sorger'
        date='Jun 2017'>
        <p>
          <a href='https://simone.accascina.me/biword/poster.pdf'>Poster</a>&nbsp;
          at the OHBM2017 conference in Vancouver, Canada.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;