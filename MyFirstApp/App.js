
import React from  'react'
import {
    AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  ChatScreen from './second-screen';
import  HomeScreen from './first-screen';
import  Addnotes from './Addnotes';
import Editnotes from './Edit-screen';

  class MyfirstApp extends React.Component{
    render() {
        const {navigation} = this.props.navigation;
        return (
            <MyFirstApp navigation={ navigation }/>
        );
    }
}



const MyFirstApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen},
    Addnote: {screen :Addnotes},
    Editnote:{screen : Editnotes}
});
// export default MyFirstApp;
// if you are using create-react-native-app you don't need this line
 AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);