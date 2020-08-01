import React from 'react';
import {useDispatch} from 'react-redux';

import AppNavigator from 'App/Navigators/AppNavigator';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StartupActions from 'App/Stores/Startup/Actions';
import {PropTypes} from 'prop-types';
import {Helpers} from 'App/Theme';
import NavigationService from 'App/Services/NavigationService';

function RootScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(StartupActions.startup());
  });

  return (
    <View style={Helpers.fill}>
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}

RootScreen.propTypes = {
  startup: PropTypes.func,
};

export default RootScreen;
