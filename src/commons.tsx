import * as React from 'react'
import { Icon, Header, Grid, SemanticICONS } from 'semantic-ui-react'


// SectionHeader -------------------------
interface PropsSectionHeader {
    title: string
    icon: SemanticICONS
}

export const SectionHeader: React.SFC<PropsSectionHeader> = p => (
  <Header as='h2' color='teal'>
    <Icon name={p.icon} />
    {p.title}
  </Header>
)


// DatedItem -----------------------------
export interface PropsDatedItem {
  title: string
  href?: string
  description?: string
  position?: string
  date?: string
  startDate?: string
  endDate?: string
}

export const DatedItem:React.SFC<PropsDatedItem> = p => {
  const date = p.date ? p.date : (p.startDate && `${p.startDate} - ${p.endDate}`)
  return (
    <Grid.Row>
      <Grid.Column width={4}>
        {date}
      </Grid.Column>
      <Grid.Column width={12}>
        <a href={p.href} target='_blank'>
          <Header as='h3' color='orange'>
            {p.title} {p.description ? '-' : ''} {p.description}
            {p.href && (
              <span style={{marginLeft: '3px'}}>
                <Icon size='tiny' color='grey' name='external share' />
              </span>
            )}
            <Header.Subheader>
              {p.position}
            </Header.Subheader>
          </Header>
        </a>
          {p.children}
      </Grid.Column>
    </Grid.Row>
  )
}
