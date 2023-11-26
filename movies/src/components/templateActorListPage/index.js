import React, { useState } from "react";
import Header from "../headerActorList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, name, action }) {

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList action={action} actors={actors}></MovieList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;