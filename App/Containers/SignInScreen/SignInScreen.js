import React, {useState, useEffect} from 'react';
import {View, Image, Text, Button} from 'react-native';
import {Auth, Hub} from 'aws-amplify';
import Style from './SignInScreenStyle';
import {Helpers, Images, Metrics, ApplicationStyles} from 'App/Theme';

const SignInScreen = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then((userData) => setUser(userData))
      .catch(() => console.log('Not signed in'));
  });
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
        <Button
          style={ApplicationStyles.button}
          onPress={() => Auth.federatedSignIn({provider: 'SignInWithApple'})}
          title="Sign in with Apple"
        />
        <Button
          style={ApplicationStyles.button}
          onPress={() => Auth.federatedSignIn({provider: 'Google'})}
          title="Sign in with Google"
        />
        {user != null ? (
          <Button
            style={ApplicationStyles.button}
            onPress={() => Auth.signOut()}
            title={`Sign Out ${user.getUsername()}`}
          />
        ) : (
          <Text style={Style.textStyle}> Not login</Text>
        )}
      </View>
    </View>
  );
};

export default SignInScreen;
