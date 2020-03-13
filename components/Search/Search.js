/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Input, Text, View, Header, Footer} from 'native-base';
import FA from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
// import FA from 'react-native-vector-icons/FontAwesome';
import {PEXELS_KEY} from 'react-native-dotenv';
import Cards from '../Popuplar/Cards';
import Spinners from '../Spinner/Spinners';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNav from '../Navs/TopNav';
import SearchFooter from './SearchFooter';

const Search = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [ress, setRess] = useState({});
  const [input, setInput] = useState('');

  const handleChange = e => {
    if (e) {
      setInput(e);
    }
  };
  const handleSearch = () => {
    if (input) {
      setIsLoading(true);
      let page = 1;
      let pexelsUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=50&${page}`;
      Axios.get(pexelsUrl, {
        headers: {
          Authorization: PEXELS_KEY,
        },
      })
        .then(res => {
          setRess(res);
          setSearchRes(res.data.photos);
          if (res.data.photos.length === 0) {
            setShowEmpty(true);
          } else {
            setShowEmpty(false);
          }
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    } else {
      setRess({});
      setSearchRes([]);
    }
  };

  useEffect(() => {}, [input]);

  const searchImg = searchRes.map(img => <Cards data={img} key={img.id} />);

  return (
    <>
      <TopNav {...props} title="Search" />
      <ScrollView style={styles.container}>
        {!searchRes && <Text>Search for images..</Text>}
        {isLoading && <Spinners />}
        {showEmpty ? (
          <View
            style={{
              opacity: 0.5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>no photos found!</Text>
          </View>
        ) : null}
        {searchRes.length !== 0 ? (
          <Text style={styles.header}>
            {ress.data && ress.data.total_results} results
          </Text>
        ) : null}
        {searchImg}
      </ScrollView>
      <SearchFooter
        {...props}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A3A3A3',
    marginBottom: 10,
  },
});

export default Search;
