import React,{Component} from 'react'
import {Button,View} from 'react-native'

export default class LoginScreen extends Component {

    signInWithGoogleAsync = async()=> {
        try {
            const result = await Google.logInAsync({
                behaviour:"web",
                androidClientId:"361340230801-nu7s633s4a64646tkh1ahseqspb0488v.apps.googleusercontent.com",
                scopes:['profile','email']
            });
        }
        catch (e) {
            console.log(e.message);
            return { error: true };
          }
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>Login</Text>
            </View>
        )
    }
}