import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Image, StyleSheet,KeyboardAvoidingView,ToastAndroid,Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';



export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    Login = async(email,password)=>{
        if(email&& password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate("WriteScreen")
                }


            } 
            catch(error){
                console.log(error.code)
                switch(error.code){
                    case "auth/user-not-found" :
                        Alert.alert("User does not exist")
                        break;
                        case "auth/invalid-email" :
                            Alert.alert("Incorrect Email or Password")
                            break;
                }
            }

        }
        else{
            Alert.alert("Please enter Email ID and password.")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                    <TextInput 
                    placeholder="Email ID" 
                    keyboardType= "email-address"
                    style={styles.emailInput}
                    onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}

                    />
                </View>
                <View>
                    <TextInput
                    placeholder="Password" 
                    style={styles.passwordInput}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    secureTextEntry={true}
                    />
                </View>
                <View>
                    <TouchableOpacity style ={styles.loginButton}
                    onPress={()=>
                    {this.Login(this.state.email,this.state.password)}}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    emailInput:{
        borderWidth:2,
        marginTop:200,
        marginBottom:50,
        width:300,
        height:50
    },
    passwordInput:{
        borderWidth:2,
        marginTop:50,
        width:300,
        height:50
    },
    loginButton:{
        borderWidth:2,
        marginTop:50,
        width:100,
        height:50,
        backgroundColor:"green",
        color:"white"
    }
})