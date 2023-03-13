import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

export default function ProjectCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 700,
        ":hover": { transform: "scale(1.01)" },
        transition: "all .35s ease-in-out, box-shadow .35s ease-in-out",
        background: "#3a4b59",
        color: "white",
      }}
    >
      <CardMedia
        sx={{
          height: 300,
          width: 400,
          margin: "auto",
          borderRadius: "3px",
          marginTop: "2%",
        }}
        image={props.image}
        title="test"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="white">
          {props.description}
        </Typography>
        <Typography
          sx={{ mt: 2.5, fontSize: "14px" }}
          color="white"
        >
          <strong><em>Languages / Technologies: </em></strong> <em>{props.tech}</em>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={props.url}
          size="small"
          sx={{
            background: "white",
            ":hover": { background: "#3a4b59", color: "white" },
          }}
        >
          Learn More (github)
        </Button>
      </CardActions>
    </Card>
  );
}
