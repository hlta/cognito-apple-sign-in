/**
 * @format
 */

import {AppRegistry, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import App from './App/App';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify';
import config from './aws-exports';

async function urlOpener(url, redirectUrl) {
  await InAppBrowser.isAvailable();
  const {type, url: newUrl} = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (type === 'success') {
    Linking.openURL(newUrl);
  }
}

Amplify.configure({
  ...config,
  oauth: {
    ...config.oauth,
    urlOpener,
  },
});
AppRegistry.registerComponent(appName, () => App);
