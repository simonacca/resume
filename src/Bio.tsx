import * as React from 'react'
import { List, Grid, Header, Image } from 'semantic-ui-react'

const headshot = require('./me.jpg')

const C:React.SFC = p => (
  <Grid.Row>
    <Grid.Column width={5}>
      <List>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>Via Castel Boverano 55, Rome, Italy</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='phone' />
          <List.Content>+39 338 4340 853</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:simon@accascina.me'>simon@accascina.me</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='linkify' />
          <List.Content>
            <a href='https://simone.accascina.me'>accascina.me</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='lock' />
          <List.Content>
            <a href='https://keybase.io/simonacca/'>Keybase</a>
          </List.Content>
        </List.Item>
      </List>
    </Grid.Column>
    <Grid.Column verticalAlign='middle' textAlign='center' width={7}>
      <Header as='h1'>
        SIMON ACCASCINA
        <Header.Subheader>Computer Scientist</Header.Subheader>
      </Header>
    </Grid.Column>
    <Grid.Column floated='right' width={3}>
      <Image src={headshot} size='large' />
    </Grid.Column>
  </Grid.Row>
)

export default C;