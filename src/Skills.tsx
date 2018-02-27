import * as React from 'react'
import { Card, Grid, Header, Icon } from 'semantic-ui-react'
import { SectionHeader, DatedItem } from './commons'

interface PropsItem {
  title: string
  description?: string
}

const Item: React.SFC<PropsItem> = p => (
  <Card>
    <Card.Content>
      <Card.Header>
        {p.title}
      </Card.Header>
      { p.description && (
        <Card.Meta>
          Friends of Elliot
          {p.description}
        </Card.Meta>

      )}
      <Card.Description>
        {p.children}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
    </Card.Content> */}
  </Card>
)

const C:React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title='Skills' icon='settings' />
      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={2}>
      </Grid.Column>
      <Grid.Column width={14}>
        <Card.Group>
          <Item title='Languages: Expert'>
            <ul>
              <li>Python</li>
              <li>Golang</li>
              <li>Clojure</li>
              <li>Typescript</li>
            </ul>
          </Item>
          <Item title='Languages: Intermediate'>
            <ul>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </Item>
          <Item title='Computer science topics of interests'>
            <ul>
              <li>Distributed systems</li>
              <li>Machine learning</li>
              <li>Databases</li>
            </ul>
          </Item>
          <Item title='Technologies: Expert'>
            <ul>
              <li>Linux system administration</li>
              <li>Containerization</li>
              <li>Google Cloud Platform</li>
              <li>Postgresql</li>
              <li>Git</li>
              <li>React</li>
            </ul>
          </Item>
          <Item title='Technologies: Intermediate'>
            <ul>
              <li>Apache Kafka</li>
              <li>Redis</li>
              <li>Kubernetes</li>
              <li>TensorFlow</li>
              <li>RethinkDB</li>
              <li>Etcd</li>
              <li>Cassandra (beginner)</li>
            </ul>
          </Item>
          <Item title='Other'>
            <ul>
              <li>
                <strong>Languages</strong>
                <ul>
                  <li>Italian: native speaker</li>
                  <li>English: fluent</li>
                </ul>
              </li>
              <li>
                <strong>Leadership</strong>: Student representative for 5 years while in high school
              </li>
              <li>Electronics enthusiast</li>
            </ul>

          </Item>
        </Card.Group>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </Grid.Row>
)

export default C;