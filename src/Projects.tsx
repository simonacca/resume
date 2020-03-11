import * as React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { SectionHeader, DatedItem } from "./commons";

const C: React.SFC = p => (
  <Grid.Row>
    <Grid>
      <Grid.Row>
        <SectionHeader title="Projects and Employment" icon="idea" />
      </Grid.Row>

      <DatedItem
        title="Fotokite"
        description="Tethered drones for public safety"
        startDate="Feb 2019"
        endDate="Present"
        href="https://fotokite.com"
      >
        <p>
          I currently work as Lead Software Engineer for Backend. Fotokite
          produces a Kite ( tethered drone ) that flies autonomously and helps
          first responders with situational awareness by providing live color
          and thermal video. My team of <i>generalist software engineers</i>{" "}
          takes care of all things Linux, Networking, Infrastructure and Cloud.
          <br />
          For example, we designed and built:
          <ul>
            <li>An atomic package manager for embedded linux</li>
            <li>
              The infrastructure for storage, transfer and processing of our
              "black box" flight data{" "}
            </li>
            <li>Redundant upstream connectivity for the Ground Station</li>
            <li>
              Realtime video streaming capability with sub-second latency (in
              progress)
            </li>
          </ul>
        </p>
      </DatedItem>
      <DatedItem
        title="Biword"
        description="brain-computer interface"
        startDate="Nov 2016"
        endDate="Present"
        href="https://biword.sophia.science/"
      >
        <p>
          Co-Ideation, software development and experimental validation of a
          Brain-Computer interface based on binary search. Biword allows
          research subjects to spell words by exploiting two mental tasks whose
          activation is distinguishable via realtime analysis of fMRI to
          iteratively slice the english dictionary until it is composed of a
          single word.
        </p>
      </DatedItem>
      <DatedItem
        title="Takuino"
        startDate="2013"
        endDate="2018"
        description="knowledge management platform"
        position="Founder"
        href="https://takuino.com"
      >
        <p>
          Ideation, software development and marketing of an innovative
          knowledge management platform. Takuino is a platform for note taking
          and sharing based on the web (like wikipedia) with a focus on
          hierarchical organization of knowledge.
        </p>
      </DatedItem>
      <DatedItem
        title="SafeTrek"
        description="outdoor safety app"
        startDate="Feb 2016"
        endDate="Apr 2016"
      >
        <p>
          Ideation and software development of an android application for
          enhancing safety during outdoor activities. The app logs the user's
          position to a remote server and coordinates with the emergency
          services in case the user becomes unresponsive for an extended period
          of time.
        </p>
      </DatedItem>
      <DatedItem
        title="Campus News Bot"
        description="push notification system"
        startDate="Mar 2015"
        endDate="Aug 2017"
        href="https://campus.services/trento/"
      >
        <p>
          Ideation, software development and maintenance of a campus wide push
          notification system for the University of Trento. At peak usage, the
          system reached 3000 users and managed more than 10000 daily messages.
        </p>
      </DatedItem>
    </Grid>
  </Grid.Row>
);

export default C;
