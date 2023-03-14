import React from "react";
import {
  MainContainer,
  TitleContainer,
  PresentationName,
  PresentationCourse,
  PresentationContainer,
  ProjectsContainer,
  PortfolioHeader,
} from "./Home.styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import data from "../../data/projects.json";
import ProjectCard from "../Card/ProjectCard.js";

let projects = [];
data.forEach((record, i) => {
  const project = {
    title: record.title,
    description: record.description,
    image: require("../../images/" + record.image + ".png"),
    url: record.url,
    tech: record.tech,
  };
  projects.push(project);
});

const avatarStyle = {
  color: "green",
  fontSize: "1.5rem",
  width: 150,
  height: 150,
  boxShadow: 20,
  border: "2px solid white",
  margin: "2rem",
};

function GridItem(props) {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <ProjectCard
          title={props.title}
          description={props.description}
          image={props.image}
          url={props.url}
          tech={props.tech}
        ></ProjectCard>
      </Grid>
    </React.Fragment>
  );
}

function GridRow(props) {
  return (
    <React.Fragment>
      <Grid container item spacing={3}>
        {props.data.map((project, i) => {
          return (
            <GridItem
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              tech={project.tech}
            ></GridItem>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default function Home() {
  return (
    <div>
      <MainContainer>
        <TitleContainer>
          <PresentationContainer>
            <PresentationName>Williams Santiago</PresentationName>
            <PresentationCourse>
              <em>Computer Engineering bachelor @ UFPE</em>
            </PresentationCourse>
            <PortfolioHeader>This is my portfolio.</PortfolioHeader>
          </PresentationContainer>
          <Avatar
            src={require("../../images/eu.jpg")}
            sx={avatarStyle}
          ></Avatar>
        </TitleContainer>

        <Box
          sx={{
            flexGrow: 1,
            margin: "auto",
            marginTop: "5%",
            width: 1000,
          }}
        >
          <Grid container spacing={8} alignItems="stretch">
            <GridRow data={projects.slice(0, 2)}></GridRow>
            <GridRow data={projects.slice(2, 4)}></GridRow>
            <GridRow data={projects.slice(4, 6)}></GridRow>
          </Grid>
        </Box>
      </MainContainer>
    </div>
  );
}
