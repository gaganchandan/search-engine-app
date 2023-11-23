import './Home.css'; 

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [chosenCategory, setChosenCategory] = useState(null);

  const buttons = ['Anime', 'Books', 'Manga', 'Movies'];
  const texts = [
            '',     'A',     'An',     'Ani',    'Anim',   'Anime', 'Anime', 'Anime',
            'Anim', 'Ani',   'An',     'A',      '',       'B',     'Bo',    'Boo',
            'Book', 'Books', 'Books',  'Books',  'Book',   'Boo',   'Bo',    'B',
            '',     'M',     'Ma',     'Man',    'Mang',   'Manga', 'Manga', 'Manga',
            'Mang', 'Man',   'Ma',     'M',      '',       'M',     'Mo',    'Mov',
            'Movi', 'Movie', 'Movies', 'Movies', 'Movies', 'Movie', 'Movi',  'Mov',
            'Mo',   'M'
          ];
  const changeText = () => {
    setTopicIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(changeText, 100);

    return () => clearInterval(interval);
  }, []);

  const handleChoose = (index) => {
    setChosenCategory(index);
  };

  const handleSearch = () => {
    if (chosenCategory !== null) {
      switch (chosenCategory) {
        case 0:
          window.location.href = `https://aniwave.to/filter?keyword=${searchValue}`;
          break;
        case 1:
          window.location.href = `http://libgen.is/search.php?req=${searchValue}&lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def`;
          break;
        case 2:
          window.location.href = `https://allmanga.to/search-manga?cty=ALL&query=${searchValue}`;
          break;
        case 3:
          window.location.href = `https://fmovieszfree.com/search-query/${searchValue}`;
          break;
        default:
          alert('Please choose a category');
      }
    }
  };

    const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                      handleSearch();
                    }
          };

  return (
    <div className="App">
      <div className="center-container">
        <div className="title-container">
          <span>Search for </span>
          <span>{texts[topicIndex]}</span>
          <br />
          <br />
          <br />
        </div>
        <div className="searchbar-container">
          <span className="search-icon"> Search: </span>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="buttons-container">
          {buttons.map((button, index) => (
            <input
              key={index}
              type="button"
              value={button}
              style={{
                backgroundColor:
                  chosenCategory === index ? '#f571ec' : '#303134',
              }}
              onClick={() => handleChoose(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
