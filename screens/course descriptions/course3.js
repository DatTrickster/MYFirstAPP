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

const Sewing3 = ({navigation}) =>{


  
return(
  <SafeAreaView>
<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
 
  <ScrollView style={{height:640}}>
    <View style={{backgroundColor:'green',height:200,padding:1}}>
    <Image  source={require('../images/aid.jpg' )} style={{width:400,height:200,borderRadius:5,flex:2,alignSelf:'center'}}/>
    </View>
     <Card  style={{padding: 10, 
margin: 15 ,
flexDirection:'column', 
backgroundColor:'white',
display:'flex',
flex:1,
borderRadius:5}}>

       <View>
      
        <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20}}>First Aid</Text>
      
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'center'}}> Fees: R1500 </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Description: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>First aid refers to medical attention that is usually administered immediately after the injury occurs and at the location where it occurred. It often consists of a one-time, short-term treatment and requires little technology or training to administer. First aid can include cleaning minor cuts, scrapes, or scratches; treating a minor burn; applying bandages and dressings; the use of non-prescription medicine; draining blisters; removing debris from the eyes; massage; and drinking fluids to relieve heat stress. </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}>Course Purpose: </Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>To provide first aid awareness and basic life support</Text>
        <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Course Content: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Wounds and bleeding</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Burns and fractures</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Emergency scene management</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Cardio-Pulmonary Resuscitation (CPR)</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Respiratory distress e.g., Choking, blocked airway</Text>
    </View>
    </Card>
   
    
  </ScrollView>
   
  
    
    

    </SafeAreaView>
);
};

export default Sewing3;