/*
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
*/
/*
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
*/
/*
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}*/
/*
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home... again"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
*/
 // Header Bar Navigation  
 /*
import React from 'react';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';
  
class HomeScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.push('Profile')}  
                />  
            </View>  
        );  
    }  
}  
class ProfileScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Profile',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
                <Button  
                    title="Go to Profile... again"  
                    onPress={() => this.props.navigation.push('Profile')}  
                />  
                <Button  
                    title="Go to Home"  
                    onPress={() => this.props.navigation.navigate('Home')}  
                 />  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
            </View>  
    );  
    }  
}  
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
*/
/*
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:{' '}
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:{' '}
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);
*/

import React from 'react';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator }from 'react-navigation-stack';
  
class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.navigate('Profile')}  
                />  
            </View>  
        );  
    }  
}  
class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
            </View>  
    );  
    }  
}  
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  