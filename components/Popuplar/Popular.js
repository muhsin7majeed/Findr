/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {PEXELS_KEY} from 'react-native-dotenv';
import Axios from 'axios';

import Card from './Cards';
import Spinners from '../Spinner/Spinners';

const Popular = ({textColor, bgColor, bgShade, theme}) => {
  const [popularImgs, setPopularImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let page = 1;
    let pexelsUrl = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
    Axios.get(pexelsUrl, {
      headers: {
        Authorization: PEXELS_KEY,
      },
    })
      .then(res => {
        let popularArr = [];
        res.data.photos.forEach(img => {
          popularArr.push({
            thumbnail: img.src.medium,
            download: img.src.original,
            photographer: img.photographer,
            id: img.id,
            photographerUrl: img.photographer_url,
            source: 'pexels',
            sourceUrl: 'www.pexels.com',
          });
        });
        setPopularImgs(popularArr);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const popularCard = popularImgs.map(img => {
    return (
      <Card
        textColor={textColor}
        bgColor={bgColor}
        bgShade={bgShade}
        theme={theme}
        data={img}
        key={img.id}
      />
    );
  });
  return (
    <>
      {isLoading && <Spinners />}
      <ScrollView>
        <View style={{padding: 10, backgroundColor: theme ? '#333' : '#fff'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: textColor,
              marginBottom: 10,
            }}>
            Popular Images
          </Text>
          <View>{popularCard}</View>
        </View>
      </ScrollView>
    </>
  );
};

export default Popular;
