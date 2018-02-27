import * as React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Interests' icon='puzzle' />
      </Grid.Row>
      <DatedItem title='Mountaineering'>
        <p>
          Pursuing trekking and skiing solo as well as part of the scouts.
        </p>
      </DatedItem>
      <DatedItem title='Electronics'>
        <p>
          Embedded programming projects and hobbyst-level hardware design and
          manifacturing.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
)

export default C;