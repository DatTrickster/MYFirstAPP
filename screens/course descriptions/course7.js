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

const Sewing7 = ({navigation}) =>{


  
return(
  <SafeAreaView>
<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
 
  <ScrollView style={{height:620}}>
    <View style={{backgroundColor:'green',height:200,padding:1}}>
    <Image  source={require('../images/Sewing.jpg' )} style={{width:400,height:200,borderRadius:5,flex:2,alignSelf:'center'}}/>
    </View>
     <Card  style={{padding: 10, 
margin: 15 ,
flexDirection:'column', 
backgroundColor:'white',
display:'flex',
flex:1,
borderRadius:5}}>

       <View>
      
        <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20}}>Sewing</Text>
      
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'center'}}> Fees: R1500  </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Description: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:18,textAlign:'center'}}>Sewing is the activity of making or mending clothes or other things using a needle and thread. Sewing lets you express yourself through your creations. From selecting the pattern, the pattern and fabric to putting the finishing touches, every aspect of this activity allows you to be creative while designing your own clothing. It also gives you something to be proud of as your creations can make you stand out from the rest </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}>Course Purpose: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:18,textAlign:'center'}}>To provide alterations and new garment tailoring services </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Course Content: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Types of stitches</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Threading a sewing machine</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Sewing buttons, zips, hems and seams</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Alterations</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Designing and sewing new garments</Text>
       
    </View>
    </Card>
   
    
  </ScrollView>
   
  
    
    

    </SafeAreaView>
);
};

export default Sewing7;