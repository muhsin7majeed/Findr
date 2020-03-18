/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Linking, PermissionsAndroid} from 'react-native';
import {requestStoragePermission} from '../functions/requestPermission';
import {Card, CardItem, Left, Icon, Right} from 'native-base';
import {downloadImage} from '../functions/Download';

const Cards = ({data, textColor, bgColor, bgShade, theme}) => {
  const handleDownload = () => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ).then(res => {
      if (res) {
        downloadImage(data.download, data.id);
      } else {
        requestStoragePermission();
      }
    });
  };

  return (
    <View style={{marginBottom: 10}}>
      <Card
        style={{
          borderRadius: 5,
          borderColor: 'transparent',
          backgroundColor: theme ? bgColor : '#fff',
        }}>
        <CardItem
          style={{
            backgroundColor: theme ? bgColor : '#fff',
            borderRadius: 5,
          }}>
          <Left>
            <View>
              <Text
                style={{color: theme ? '#fff' : '#333'}}
                onPress={() => Linking.openURL(data.photographerUrl)}>
                {data.photographer}
              </Text>
              <Text
                style={{opacity: 0.5, color: theme ? '#fff' : '#333'}}
                note
                onPress={() => Linking.openURL(data.sourceUrl)}>
                @{data.source}
              </Text>
            </View>
          </Left>
          <Right>
            <Icon
              style={{padding: 10, color: theme ? '#fff' : '#333'}}
              onPress={handleDownload}
              name="download"
            />
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{uri: data.thumbnail}}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
      </Card>
    </View>
  );
};

export default Cards;
