import RNFetchBlob from 'rn-fetch-blob';
import {ToastAndroid} from 'react-native';

function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const downloadImage = (url, id) => {
  console.log('dl', url);

  let dirs = RNFetchBlob.fs.dirs;
  RNFetchBlob.config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
    path: dirs.DownloadDir + `/${id}.jpeg`,
    fileCache: true,
  })
    .fetch('GET', url, {
      //some headers ..
    })
    .progress((received, total) => {
      ToastAndroid.showWithGravity(
        `Downloading ${bytesToSize(received)}/${bytesToSize(total)}`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    })
    .then(res => {
      ToastAndroid.showWithGravity(
        'File has been downloaded to Downloads folder.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    });
};
