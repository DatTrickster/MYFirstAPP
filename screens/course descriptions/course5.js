import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';

import { Searchbar,Card } from 'react-native-paper';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Image,
  TextInputProps,
  View,
  Button,
  StatusBar,
  Platform,
  Pressable,
  FlatList
} from 'react-native';

const Sewing5 = ({navigation}) =>{


  
return(
  <SafeAreaView style={{height:700}}>
<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
 
  <ScrollView>
    <View style={{backgroundColor:'#579fd5',height:200,padding:1}}>
    <Image  source={require('../images/child.png' )} style={{width:400,height:200,borderRadius:5,flex:2,alignSelf:'center'}}/>
    </View>
     <Card  style={{padding: 10, 
margin: 15 ,
flexDirection:'column', 
backgroundColor:'white',
display:'flex',
flex:1,
borderRadius:5}}>

       <View>
      
        <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20}}>Child Minding </Text>
      
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'center'}}> Fees: R750  </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Description: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>Each childminder must ensure that they provide high quality childcare, within a positive, safe and happy environment. Childminders are responsible for planning and preparing a programme of play-based activities and in the completion of all relevant record keeping, paperwork and administration.</Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}>Course Purpose: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>To provide basic child and baby care </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Course Content: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• birth to six-month old baby needs</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• seven-month to one year old needs</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Toddler needs</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Educational toys</Text>
       
    </View>
    </Card>
   
    
  </ScrollView>
   
  
    
    

    </SafeAreaView>
);
};

export default Sewing5;