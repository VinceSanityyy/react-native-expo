import axios from 'axios'
import {AsyncStorage} from 'react-native';
export default async function login(email,password,setLoading){
//    console.log(email, password)
   console.log('Loading...')
   setLoading(true)

   await axios.post('http://52.74.70.6/api/auth/login',{
       email: email,
       password: password
   },{
       headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
       }
   })
    .then((res)=>{
        // console.log(res.data.bearer_token)
        setLoading(false)
        AsyncStorage.setItem('bearer_token', res.data.bearer_token);
        console.log(AsyncStorage.getItem('bearer_token'))
        console.log('Loading Finished')
    }).catch((err)=>{
        setLoading(false)
        console.log('Loading Finished')
        console.log(err)
    })
}
