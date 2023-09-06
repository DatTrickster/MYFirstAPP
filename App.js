/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

  import {Node} from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import React, { useState } from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    Alert,
    Image,
    View,
    StatusBar,
    Platform,
  } from 'react-native';
import Confirm from './screens/Components/confirm ';
import Home from './screens/Home';
import Learn from './screens/learn';
import CartMain from './screens/Cart';
import Wishlist from './screens/Wishlist';
import Shop from './screens/Shop';
import Sewing from './screens/course descriptions/course1'
import Sewing2 from './screens/course descriptions/course2';
import Sewing3 from './screens/course descriptions/course3';
import Sewing4 from './screens/course descriptions/course4';
import Sewing5 from './screens/course descriptions/course5';
import Sewing6 from './screens/course descriptions/course6';
import Sewing7 from './screens/course descriptions/course7';
import SW from './screens/course descriptions/6W';
import SM from './screens/course descriptions/6M';
import Profile from './screens/profile';
import Contact from './screens/Contact';
  const styles= StyleSheet.create({
   homescreenText:{
     color:'black',
     textAlign:'center',
     fontWeight:'bold',
     fontSize: 20,
     textAlign:'center',
 margin:10,
 fontWeight:'bold',
 flexDirection:'column'

   },
 
 
   moduleText:{
     color: 'black',
     fontWeight:'bold',
     padding:10,
     textAlign:'center',
     fontSize: 20,
     
 
   },
   moduleEntery:{
     color: "#fc3f07",
     fontSize: 29,
    textAlign:'center',
    padding:15
 
   },
   
 
 ImageMap:{
 width:45*3,
 height:22*9,
 marginLeft:3,
 padding:40,
 shadowColor: 'black',
 alignSelf:'center',
 borderRadius: 20,
 borderColor:'black',
 borderWidth:4,
 marginBottom:20,
 marginTop:25,

 },
 
 
 });
 

 


 




function StackScreen(){

  return(
<Stack.Navigator mode="modal" initialRouteName='Shop'>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Shopping' component={Shop}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing" component={Sewing}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing2" component={Sewing2}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing3" component={Sewing3}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing4" component={Sewing4}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing5" component={Sewing5}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing6" component={Sewing6}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing7" component={Sewing7}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right',freezeOnBlur:false}} name="Cart" component={CartMain}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="SixWeek" component={SW}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="forms" component={Confirm}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="SixMonth" component={SM}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Home' component={Home}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='contact' component={Contact}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='profile' component={Profile}/>
</Stack.Navigator>
  );
}

function HomeStack(){

  return(
<Stack.Navigator mode="modal" initialRouteName='Home'>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Home' component={Home}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Shopping' component={Shop}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="Cart" component={CartMain}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="SixMonth" component={SM}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="forms" component={Confirm}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='contact' component={Contact}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing" component={Sewing}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing2" component={Sewing2}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing3" component={Sewing3}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing4" component={Sewing4}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing5" component={Sewing5}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing6" component={Sewing6}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name="Sewing7" component={Sewing7}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='profile' component={Profile}/>
</Stack.Navigator>
  );
}

function Wishlist2(){

  return(
<Stack.Navigator mode="modal" initialRouteName='MainWishlist' >
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,orientation:'portrait'}} name='MainWishlist' component={Wishlist}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Shopping' component={Shop}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Home' component={Home}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="Cart" component={CartMain}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="forms" component={Confirm}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='contact' component={Contact}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='profile' component={Profile}/>
</Stack.Navigator>
  );
}
 
function Class(){

  return(
<Stack.Navigator mode="modal" initialRouteName='Home'>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='Home' component={Learn}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='contact' component={Contact}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait'}} name='profile' component={Profile}/>
  <Stack.Screen options={{headerShown:false,navigationBarHidden:true,statusBarHidden:true,presentation:'containedModal',orientation:'portrait',animation:'slide_from_right'}} name="Cart" component={CartMain}/>

</Stack.Navigator>
  );
}
 
 
const Stack= createNativeStackNavigator();


 const App=() =>{

   const Tab = createBottomTabNavigator();
   
   return (
     <NavigationContainer>
       <Tab.Navigator
       initialRouteName='MainHome'
        mode="modal" 
       screenOptions={{
        
 headerShown:false,
 
 headerTitleAlign:'center',
 headerStyle: {
  backgroundColor: '#004080',
},

headerTintColor:'#fff',
headerShadowVisible:true,
 tabBarShowLabel:false,
 tabBarActiveTintColor:'#004080',
 tabBarStyle:{height:60,padding:5,backgroundColor:'white',}
 
 
       }}>
   
   <Tab.Screen name='MainHome' component={HomeStack} options={{lazy:true,unmountOnBlur:true,
       tabBarIcon: ({color})=> (
         <Ionicons name='md-home-sharp' color={color} style={{fontSize:27}}/>
       )
     }}/>

<Tab.Screen name='classroom' component={Class} options={{lazy:true,unmountOnBlur:true,
       tabBarIcon: ({color})=> (
         <Ionicons name="md-library" color={color} style={{fontSize:30}}/>
         
       )
     }}/>

    <Tab.Screen name='Shop' component={StackScreen} options={{lazy:true,unmountOnBlur:true,
       tabBarIcon: ({color})=> (
         <Ionicons name="md-pricetags-sharp" color={color} style={{fontSize:30}}/>
       )
     }}/>
   
      <Tab.Screen name='Wishlist' component={Wishlist2} options={{lazy:true,unmountOnBlur:true,
       tabBarIcon: ({color})=> (
         <Ionicons name="heart-outline" color={color} style={{fontSize:30}}/>
         
       )
     }}/>
    
    



       </Tab.Navigator>
     </NavigationContainer>
   );

 }
 
 export default App;
 
