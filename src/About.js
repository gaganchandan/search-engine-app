import './About.css'

import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About...</h1>
      <p>
      This app is a search engine tailored to provide accurate links to <em>Anime</em>, 
      <em>Books</em>, <em>Manga</em> and <em>Movies</em><br /> based on the user's search query.
      <br />
      <br />
      It uses the following sites:
      <br />
      <br />
      Anime: <a target="_blank" href="https://aniwave.to">AniWave</a>
      <br />
      <br />
      Books: <a target="_blank" href="http://libgen.is">Library Genesis</a>
      <br />
      <br />
      Manga: <a target="_blank" href="https://allmanga.to">All Manga</a>
      <br />
      <br />
      Movies: <a target="_blank" href="https://fmovieszfree.com/">FMovies</a>
      <br />
      <br />
      </p>
    </div>
  );
};

export default About;
