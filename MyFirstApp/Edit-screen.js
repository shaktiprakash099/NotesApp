import React from 'react'
import {
    AppRegistry,
    View,
    Text,
    Alert,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,






} from  'react-native'
import Styles from './Styles';
var self ;
import Singletone from './Singletone'
export  default  class EditScreen extends React.Component{





    editnote(){
        var data =   this.props.navigation.state.params.user;
        console.log("index no is ",data.index);
        if(!self.state.noteTitle){

            Alert.alert('Please provide note title')  ;
            return
        }
        if(!self.state.noteContent){

            Alert.alert('Please provide note content')  ;
            return

        }


        console.log(self.state.noteTitle)
        console.log(self.state.noteContent)

        Singletone.getInstance()._editElement(data.index,self.state.noteTitle,self.state.noteContent,Singletone.getInstance().loggedInuseremail)


        // var Array =  Singletone.getInstance()._returnDataArray();
        //
        // console.log("===after edit=======",Array);

    }
    static navigationOptions = ({ navigation }) => {
        return ({
            // title: `welcome ${navigation.state.params.user}`,
            titleTextColor: '#000080',


            headerStyle: {
                backgroundColor: '#C1E3BC'
            },

            headerRight: <Button
                onPress={()=>self.editnote()}
                title="Edit"
                color="#841584" />
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
        };

    }


    render() {
        self=this;

        const { params } = this.props.navigation.state.params.user;
        console.log("datain params is ",params);
        var data =   this.props.navigation.state.params.user;
        console.log("data is ",data);

        return (

            <KeyboardAvoidingView behavior='padding'>
                <View style ={styles.container}>
                    <TextInput
                        style={Styles.input}
                        onChangeText = {(noteTitle) => this.setState({
                            noteTitle  : noteTitle,
                        })}
                         placeholder= {data.Name}
                        value={self.state.noteTitle}

                    />
                    <TextInput
                        style={Styles.inputforcontent}
                        onChangeText={(noteContent) => this.setState({
                            noteContent: noteContent,
                        })}
                        keyboardType = 'default'
                        autoCapitalize = 'sentences'
                        numberOfLines = {0}
                        multiline = {true}
                        placeholder= {data.Note}
                        secureTextEntry={true}
                        value={self.state.password}
                    />
                </View>
            </KeyboardAvoidingView>


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
        width:150,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    textViewStyle :{
        height: 40,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor:'black',
        borderRadius: 5,
        borderWidth: 1,
        top : 10,
        backgroundColor : 'white'

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
        padding: 20,
        color: 'white'
    },

})