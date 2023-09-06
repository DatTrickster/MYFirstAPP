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

const Sewing6 = ({navigation}) =>{


  
return(
  <SafeAreaView style={{height:700}}>
<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
 
  <ScrollView>
    <View style={{backgroundColor:'green',height:200,padding:1}}>
    <Image  source={require('../images/Garden.jpg' )} style={{width:400,height:200,borderRadius:5,flex:2,alignSelf:'center'}}/>
    </View>
     <Card  style={{padding: 10, 
margin: 15 ,
flexDirection:'column', 
backgroundColor:'white',
display:'flex',
flex:1,
borderRadius:5}}>

       <View>
      
        <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20}}>Garden Maintenance</Text>
      
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'center'}}> Fees: R750  </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Description: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>A maintaining or being maintained; upkeep, support for your garden. Gardening responsibilities include monitoring the health of all plants and greenspaces, watering and feeding plants, trimming trees and shrubs, fertilizing and mowing lawns, wedding gardens and keeping green spaces and walkways clear of debris and litter.</Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}>Course Purpose: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>To provide basic knowledge of watering, pruning and planting in a domestic garden.</Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Course Content: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Water restrictions and the watering requirements of indigenous and exotic plants</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Pruning and propagation of plants </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Planting techniques for different plant types'</Text>
            
     


    </View>
    </Card>
   
    
  </ScrollView>
   
  
    
    

    </SafeAreaView>
);
};

export default Sewing6;