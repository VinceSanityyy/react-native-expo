import React, {useState, useEffect} from 'react';
import { View, Text, Image,StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator, AsyncStorage  } from 'react-native'
import { Card, ListItem, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import login from '../methods/login'

export default Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    function handleClick(){
        login(email,password,setLoading)
    }

    

    if(loading == true){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }else {
        return (
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <View style={styles.container}>
                    <Card title="Login">
                    <Input placeholder='Email'
                    onChangeText={email => setEmail(email)}/>
                    
                    <Input secureTextEntry={true} 
                    placeholder='Password'
                    onChangeText={password => setPassword(password)}/>
    
                    <TouchableOpacity>
                        <Button onPress = {handleClick} title='Login'/>
                    </TouchableOpacity>
                    
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      display: 'flex'
    },
  });