import {PermissionsAndroid} from 'react-native';

export async function requestStoragePermission() {
  console.log('permission');
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      // {
      //   title: 'Allow permission to storage?',
      //   message: '',
      //   buttonNegative: 'Deny',
      //   buttonPositive: 'Allow',
      // },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      false;
    }
  } catch (err) {
    console.warn(err);
  }
}
