import React from 'react';
import  {
    AppRegistry,
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';

var self;


import Singletone from './Singletone'


export  default class ChatScreen extends React.Component {

    deletebuttonaction = ( items) =>{

        console.log("-=-=-=-=-=-=-",items);
        var removalitemname  = items.Name;
        console.log("removal index title name  ",removalitemname);
        Singletone.getInstance()._deleteElement(removalitemname)
        console.log("---Array is  ",Singletone.getInstance()._returnDataArray());

    }

        editbuttonAction = (items) => {
        console.log("data is ",items);
            this.props.navigation.navigate('Editnote',{
                user:items ,

            });

        // Alert.alert('edit button clicked ');


        }

    updatestate () {
        console.log("inside update action");
        this.setState ((state) =>  ({

            dataArray : Array.from(Singletone.getInstance()._returnDataArray()),

        }));
       console.log("#######");
       console.log(this.state.dataArray);



    };

    componentWillMount() {
        console.log("inside component will mount");
        this.setState ((state) =>  ({

            dataArray : Array.from(Singletone.getInstance()._returnDataArray()),

        }));




    }
    componentDidMount() {
        Singletone.getInstance()._savePointerSecondScreen(this);
    }


    addNotesAction (){
        this.props.navigation.navigate('Addnote',{
            user: Singletone.getInstance().loggedInuseremail,

        });
    }
    logoutAction (){
        this.props.navigation.goBack();
    }

aa

    static navigationOptions = ({ navigation }) => {
        return ({
            title: `My Notes`,
            titleTextColor: '#000080',


            headerStyle: {
                backgroundColor: '#C1E3BC'
            },
            headerLeft: <View style = {{  flexDirection: 'row'}}>
                <Button
                    onPress={()=>self.logoutAction()}
                    title="LOGOUT"
                    color="#841584" />

            </View>,
            headerRight: <View style = {{  flexDirection: 'row'}}>
                 <Button
                    onPress={()=>self.addNotesAction()}
                    title="ADD"
                    color="#841584" />

              </View>

        });
    };

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            dataArray:[],
        };

    }


    render() {
        self=this;

        // const { params } = this.props.navigation.state;
        return (

            <View>

              <FlatList
                data={this.state.dataArray}
                renderItem={
                ({ item }) =>
                    <TouchableOpacity
                        onPress={ () => this.editbuttonAction(item)}>
                    <View style = {styles.textViewStyle}>
                        <View>
                            <Text style = {styles.titleTextViewStyle}>{item.Name}</Text>
                            <Text style = {styles.contentTextViewStyle}>{item.Note}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={ () => this.deletebuttonaction(item)}>
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>

                     </View>
                    </TouchableOpacity>

                }
                keyExtractor={item => item.Name}
              >
            </FlatList>
        </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#8a9090",
    },
    button: {

        borderRadius: 5,
        width:100,
        height:50,
        top:15,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    textViewStyle :{
        height: 80,
        width: Dimensions.get('window').width - 10,
        margin: 5,
        borderRadius: 5,
        top : 10,
        backgroundColor : 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleTextViewStyle :{
        height: 20,
        width: Dimensions.get('window').width - 160,
        margin: 5,
        color:'#090304',
        flexDirection: 'row',
        fontWeight: "bold",
        fontSize: 18,
    },
    contentTextViewStyle :{
        height: 40,
        margin: 5,
        width: Dimensions.get('window').width - 150,
        flexDirection: 'row',
        color:'#545a5a',
        fontSize: 14,

    },

    contentviewstyle:{
        top : 40,
        height: 400,
        height: 400,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor:'black',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor : 'white',
        // textAlign: 'center',
    },
    buttonText: {
      top:20,
        color: 'white'
    },

})

 AppRegistry.registerComponent('MyfirstApp',() => ChatScreen);