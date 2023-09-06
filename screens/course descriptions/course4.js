import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';

import { Searchbar ,Card} from 'react-native-paper';
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

const Sewing4 = ({navigation}) =>{


  
return(
  <SafeAreaView style={{height:700}}>

<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
  <ScrollView>
    <View style={{backgroundColor:'green',height:200,padding:1}}>
    <Image  source={require('../images/Skills.png' )} style={{width:400,height:200,borderRadius:5,flex:2,alignSelf:'center'}}/>
    </View>
     <Card  style={{padding: 10, 
margin: 15 ,
flexDirection:'column', 
backgroundColor:'white',
display:'flex',
flex:1,
borderRadius:5}}>

       <View>
      
        <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20}}>Life Skills</Text>
      
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'center'}}> Fees: R1500 </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Description: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}> Life skills are defined as “a group of psychosocial competencies and interpersonal skills that help people make informed decisions, solve problems, think critically and creatively, communicate effectively, build healthy relationships, empathize with others, and cope with and manage their lives in a healthy and productive manner. Life skills may be directed toward personal actions or actions toward others, as well as toward actions to change the surrounding environment to make it conducive to health.” according to World Health Organization (WHO). Bearing the WHO definition in mind, the Basic Life Skills curriculum offers youth the emotional, social and intellectual tools needed to achieve success in life – on a personal level, an interpersonal level, and within their community and work places </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}>Course Purpose: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>To provide skills to navigate basic life necessities </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Course Content: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Opening a bank account</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Basic labour law (know your rights)</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Basic reading and writing literacy</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Basic numeric literacy</Text>

    </View>
    </Card>
   
    
  </ScrollView>
   
  
    
    

    </SafeAreaView>
);
};

export default Sewing4;