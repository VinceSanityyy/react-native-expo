import axios from 'axios'
import {AsyncStorage} from 'react-native';
export default function Logout(setLoading){
    setLoading(true)
    axios.get('http://52.74.70.6/api/auth/logout',{
        headers:{
            Authorization: 'Bearer ' + AsyncStorage.getItem('bearer_token'),
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((res)=>{
            setLoading(false)
            AsyncStorage.setItem('bearer_token', '');
            console.log(res)
        }).catch((err)=>{
            setLoading(false)
            console.log(err)
        })
}