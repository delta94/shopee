import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import LogoTitle from '@components/Navigator/headerTitle';
import HeaderRight from '@components/Navigator/headerRight';

interface Props {
  navigation: NavigationScreenProp<{}>;
}

export default class Home extends React.Component<Props, {}> {
  /**
   * header config https://reactnavigation.org/docs/4.x/headers
   */
  static navigationOptions = ({ navigation }) => {
    const navi = navigation;
    return {
      headerTitle: () => <LogoTitle />,
      headerRight: () => <HeaderRight navigation={navi}/>
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Image source={require('@assets/svg/home.svg')} />
        <Text>Select City</Text>
        <Button
          title="Go to City Selection"
          onPress={() => this.props.navigation.navigate('SelectCity')}
        />
        <Button
          title="Go to City SearchList"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
