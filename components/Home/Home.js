import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Text, Button, View, Container} from 'native-base';
import Popular from '../Popuplar/Popular';
import SearchNav from '../Navs/SearchNav';
import TopNav from '../Navs/TopNav';

const Home = props => {
  return (
    <>
      <Container>
        <TopNav {...props} />
        <Popular />
      </Container>
      <SearchNav {...props} />
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
