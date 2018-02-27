import * as React from 'react'
import { Grid, Label, Header } from 'semantic-ui-react'
import { SectionHeader, DatedItem, PropsDatedItem } from './commons'

interface PropsItem extends PropsDatedItem {
  courses?: string[]
}

const Item: React.SFC<PropsItem> = p => (
  <DatedItem {...p}>
    {p.children}
    <Header as='h4'>Courses</Header>
    <Label.Group
      size='small'
      content={p.courses && p.courses.map(c => <Label  key={c} content={c} />)}
    />
  </DatedItem>
)

const C:React.SFC = p => {
  const COURSES_PH = [
    "Calculus I",
    "Calculus II",
    "Physics I (theory and lab)",
    "Linear algebra",
  ]
  const COURSES_CS = [
        "Discrete mathematics I",
        "Discrete mathematics II",
        "Calculus",
        "Probability and Statistics",
        "Logic",
        "Physics",
        "Human Computer interaction",
        "Programming (C++)",
        "Programming (java)",
        "Software engineering I",
        "Software engineering II",
        "Operating systems",
        "Languages and compilers",
        "Computer Networking",
        "Databases",
        "Computer Architecture",
        "Functional Programming",
        "Algorithms and data structures",
        "Advanced Algorithms - LionLab",
      ]
  const UNITN='University of Trento, Italy'

  return (
    <Grid.Row>
      <Grid>
        <Grid.Row>
          <SectionHeader title='Education' icon='graduation' />
        </Grid.Row>
          <Item title='Bachelor in Computer Science' position={UNITN} startDate='Sep 2014' endDate='Sep 2017' courses={COURSES_CS}>
            <Header inline as='h4'>
              Thesis 
            </Header>
            <p>
              <a href='https://github.com/simonacca/zatt/'>Zatt</a>,
               an implementation of a distributed storage system 
              built on the Raft consensus algorithm.
            </p>
          </Item>
              
          <Item title='Bachelor in Physics (incomplete)' position={UNITN} startDate='Sep 2013' endDate='Sep 2014' courses={COURSES_PH} />
          <Item title='Scientific Lyceum'  position={'A. Avogadro, Rome'} startDate='Sep 2008' endDate='Jun 2013' />
      </Grid>
    </Grid.Row>
  )
}

export default C;