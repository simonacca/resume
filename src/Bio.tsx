import * as React from 'react'
import { List, Grid, Header, Image } from 'semantic-ui-react'

const headshot = require('./me.jpg')

const NAME = (
    <Header as='h1' color='teal'>
      SIMON ACCASCINA
      <Header.Subheader>Computer Scientist</Header.Subheader>
    </Header>
)

const C:React.SFC = p => (
  <Grid.Row>
    <Grid.Column verticalAlign='middle' textAlign='center' only='tablet mobile' mobile={16}>
      {NAME}
    </Grid.Column>
    <Grid.Column verticalAlign='middle' largeScreen={5} computer={5} tablet={6} mobile={10}>
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
        <List.Item>
          <List.Icon name='file pdf outline' />
          <List.Content>
            <a href='simon_accascina_CV.pdf'>PDF</a>
          </List.Content>
        </List.Item>
      </List>
    </Grid.Column>
    <Grid.Column verticalAlign='middle' textAlign='center' computer={7} only='computer'>
      {NAME}
    </Grid.Column>
    <Grid.Column floated='right' largeScreen={3} computer={3} tablet={6} mobile={6}>
      <Image src={headshot} size='small' />
    </Grid.Column>
  </Grid.Row>
)

export default C;