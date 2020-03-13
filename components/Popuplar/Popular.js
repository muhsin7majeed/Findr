/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Content} from 'native-base';
import Card from './Cards';
import Spinners from '../Spinner/Spinners';
import {PEXELS_KEY} from 'react-native-dotenv';
import Axios from 'axios';

const Popular = () => {
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
        setPopularImgs(res.data.photos);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const popularCard = popularImgs.map(img => {
    return <Card data={img} key={img.id} />;
  });
  return (
    <>
      {isLoading && <Spinners />}
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Popular Images</Text>
          <View style={styles.imgCard}>{popularCard}</View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  imgCard: {},
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default Popular;
