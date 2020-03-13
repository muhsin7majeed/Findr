import React from 'react';
import {View, Text, Image, Linking, PermissionsAndroid} from 'react-native';
import {requestStoragePermission} from '../services/requestPermission';
import {Card, CardItem, Left, Icon, Right} from 'native-base';
import {downloadImage} from '../services/Download';

const Cards = ({data}) => {
  const handleDownload = () => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ).then(res => {
      if (res) {
        downloadImage(data.src.original, data.id);
      } else {
        requestStoragePermission();
      }
    });
  };

  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <View>
              <Text onPress={() => Linking.openURL(data.photographer_url)}>
                {data.photographer}
              </Text>
              <Text
                style={{opacity: 0.5}}
                note
                onPress={() => Linking.openURL('https://www.pexels.com')}>
                @pexels
              </Text>
            </View>
          </Left>
          <Right>
            <Icon
              style={{padding: 10, color: 'blue'}}
              onPress={handleDownload}
              name="download"
            />
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{uri: data.src.medium}}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
      </Card>
    </View>
  );
};

export default Cards;
