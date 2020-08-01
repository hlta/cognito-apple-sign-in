import React from 'react';
import {View, Image, Text, Button} from 'react-native';
import { Auth, Hub } from 'aws-amplify';
import appleAuth, {
  AppleButton,
  AppleAuthError,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import Style from './SignInScreenStyle';
import {Helpers, Images, Metrics, ApplicationStyles} from 'App/Theme';

const SignInScreen = (props) => {
  const handleSignIn = async (data) => {
    /* Redux actions, persisting data with AsyncStorage, redirection...*/
  };

  const onAppleButtonPress = async () => {
    try {
      // make sign in request and return a response object containing authentication data
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });

      // retrieve identityToken from sign in request
      const {identityToken} = appleAuthRequestResponse;

      // identityToken generated
      if (identityToken) {
        // send data to server for verification and sign in
      } else {
        // no token, failed sign in
      }
    } catch (error) {
      if (error.code === AppleAuthError.CANCELED) {
        // user cancelled Apple Sign-in
      } else {
        // other unknown error
      }
    }
  };
  return (
    <View
      style={[
        Helpers.fill,
        Helpers.rowMain,
        Metrics.mediumHorizontalMargin,
        Metrics.mediumVerticalMargin,
      ]}>
      <View>
        <View style={Style.logoContainer}>
          <Image
            style={Helpers.fullSize}
            source={Images.logo}
            resizeMode={'contain'}
          />
        </View>
        <Text> Cognito Apple Sign In Demo</Text>
        <AppleButton
          buttonStyle={AppleButton.Style.BLACK}
          buttonType={AppleButton.Type.SIGN_IN}
          style={Style.appleButton}
          onPress={() => onAppleButtonPress()}
        />
        <Button
          style={ApplicationStyles.button}
          onPress={() => Auth.federatedSignIn({provider: 'Google'})}
          title="Web Sign In"
        />
      </View>
    </View>
  );
};

export default SignInScreen;
