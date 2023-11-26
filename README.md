# Assignment 1 - ReactJS app.

Name: Brona Keevers

## Overview.

This project is an app that shows lists of movies and their info from the tmdb databases

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Pagination
+ Additional filtering options
+ Sorting functionality
+ Additional static endpoints used
+ Additional parameterised endpoints used 
+ Linking of information between actors and movies
+ Caching with react query on all endpoints 
+ Used new material UI component (Tabs)
+ Responsive UI (I forgot to demonstrate this in my video)

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ List of top rated movies - movie/top_rated
+ List of trending movies over the past day - trending/movie/day
+ List of movies currently in cinemas - movie/now_playing

+ Get the credits for a movie - movie/${id}/credits
+ Get recommendations from a movie - movie/${id}/recommendations
+ Actor details - person/${id}
+ List of movies featuring a speific actor - person/${id}/movie_credits

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /person/:id - displays actor details.
+ /trending - displays the list of trending movies.
+ /top_rated - displays the list of top rated movies.
+ /now_playing - displays the list of movies currently in cinemas.
+ /upcoming - displays the list of upcoming movies.
+ /upcoming/playist - displays the movies that the user has selected to be added to their watch later playlist.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).