/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'native-base';
import {shuffleArr} from '../functions/shuffleArray';
import {PIXABAY_KEY, UNSPLASH_KEY, PEXELS_KEY} from 'react-native-dotenv';
import Axios from 'axios';
import Cards from '../Popuplar/Cards';
import Spinners from '../Spinner/Spinners';
import TopNav from '../Navs/TopNav';
import SearchFooter from './SearchFooter';

const Search = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [input, setInput] = useState('');
  const [showInfo, setShowInfo] = useState(true);
  const [total, setTotal] = useState(0);

  let pexelsUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=30&page=1`;
  let pixabayUrl = `https://pixabay.com/api?key=${PIXABAY_KEY}&q=${input}&per_page=30&page=1`;
  let unsplashUrl = `https://api.unsplash.com/search/photos?page=1&query=${input}&per_page=30&client_id=${UNSPLASH_KEY}`;
  let pexelHeader = {
    headers: {
      Authorization: PEXELS_KEY,
    },
  };

  let urls = [pexelsUrl, pixabayUrl, unsplashUrl];

  const handleChange = e => setInput(e);

  const handleSearch = async () => {
    setSearchRes([]);
    setIsLoading(true);
    setShowInfo(false);
    if (input) {
      Axios.all([
        Axios.get(urls[0], pexelHeader),
        Axios.get(urls[1]),
        Axios.get(urls[2]),
      ]).then(
        Axios.spread((pexels, pixabay, unsplash) => {
          let results = [];
          let tot =
            pexels.data.total_results +
            pixabay.data.total +
            unsplash.data.total;

          pexels.data.photos.forEach(img => {
            results.push({
              thumbnail: img.src.medium,
              download: img.src.original,
              photographer: img.photographer,
              id: img.id,
              photographerUrl: img.photographer_url,
              source: 'pexels',
              sourceUrl: 'www.pexels.com',
            });
          });

          pixabay.data.hits.forEach(img => {
            results.push({
              thumbnail: img.largeImageURL,
              download: img.largeImageURL,
              photographer: img.user,
              id: img.id,
              photographerUrl: img.pageURL,
              source: 'pixabay',
              sourceUrl: 'www.pixabay.com',
            });
          });

          unsplash.data.results.forEach(img => {
            results.push({
              thumbnail: img.urls.regular,
              download: img.urls.full,
              photographer: img.user.name,
              id: img.id,
              photographerUrl: img.user.links.self,
              source: 'unsplash',
              sourceUrl: 'www.unsplash.com',
            });
          });

          setIsLoading(false);
          setTotal(tot);
          setSearchRes(shuffleArr(results));
          setShowEmpty(tot === 0 ? true : false);
        }),
      );
    } else {
      // setSearchRes([]);
      // setShowInfo(true);
    }
  };

  let searchImg = searchRes.map((img, index) => (
    <Cards
      textColor={props.textColor}
      bgColor={props.bgColor}
      bgShade={props.bgShade}
      theme={props.theme}
      data={img}
      key={index}
    />
  ));

  return (
    <>
      <TopNav {...props} title="Search" />
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: props.theme ? props.bgShade : '#fff',
        }}>
        {showInfo && (
          <Text
            style={{
              textAlign: 'center',
              padding: 20,
              color: props.theme ? '#fff' : '#333',
            }}>
            Search for images..
          </Text>
        )}

        {showEmpty ? (
          <View
            style={{
              opacity: 0.5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: props.theme ? '#fff' : '#333',
            }}>
            <Text>no photos found!</Text>
          </View>
        ) : null}
        {searchRes.length !== 0 ? (
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#A3A3A3',
              marginBottom: 10,
            }}>
            {total} results
          </Text>
        ) : null}

        {searchImg}
        {isLoading && <Spinners />}
      </ScrollView>
      <SearchFooter
        {...props}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
    </>
  );
};

export default Search;
