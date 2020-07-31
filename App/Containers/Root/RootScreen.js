import React from 'react';
import AppNavigator from 'App/Navigators/AppNavigator';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StartupActions from 'App/Stores/Startup/Actions';
import {PropTypes} from 'prop-types';
import {Helpers} from 'App/Theme';
import NavigationService from 'App/Services/NavigationService';

function RootScreen() {
  const navigationRef = React.useRef(null);
  NavigationService.setTopLevelNavigator(navigationRef);
  return (
    <View style={Helpers.fill}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}

RootScreen.propTypes = {
  startup: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
