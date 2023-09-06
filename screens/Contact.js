import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';

import { Card, Divider, List, Searchbar ,Provider,Menu,MenuItemProps} from 'react-native-paper';
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

const   Contact = ({navigation}) =>{


  
return(
  <SafeAreaView style={{height:730}}>
 <View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >




 <Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=> navigation.goBack()}/>
  </Pressable>
  



 
</View>
     
 
 
       <ScrollView alwaysBounceVertical>       
       <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20,marginTop:20}}>Contact us</Text>
          <Card  style={{padding: 10, 
   margin: 15 ,
   flexDirection:'column', 
   backgroundColor:'white',
   display:'flex',
   flex:1,
   borderRadius:5}}>
 
            <View>
         
             <Image style={styles.ImageMapSP} source={require('../screens/images/kumon.png' )}/>
  
             <Divider style={{marginTop:10}}/>
                
           
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'left',marginTop:10}}>• Unit 11A, 185 Ridge Rd, Umhlanga, Durban, 4319</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'left',marginTop:10}}>• 0761237773</Text>

             <View>
              
             </View>
             
         


         </View>
         </Card>

         <Card  style={{padding: 10, 
   margin: 15 ,
   flexDirection:'column', 
   backgroundColor:'white',
   display:'flex',
   flex:1,
   borderRadius:5}}>
 
            <View>
           
             
             <Image style={styles.ImageMapSP} source={require('../screens/images/j2k.png' )}/>
             <Divider style={{marginTop:10}}/>
             <View>
                         
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'left',marginTop:10}}>• 18 Somerset Dr, Umhlanga, Durban North, 4319</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'left',marginTop:10}}>• 0828369796</Text>
             

             </View>
             
         


         </View>
         </Card>

         <Card  style={{padding: 10, 
   margin: 15 ,
   flexDirection:'column', 
   backgroundColor:'white',
   display:'flex',
   flex:1,
   borderRadius:5}}>
 
            <View>
           
             
             <Image style={styles.ImageMapSP} source={require('../screens/images/Xavier.png' )}/>
             <Divider style={{marginTop:10}}/>
             <View>
                         
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'left',marginTop:10}}>• 250 Umhlanga Rocks Dr, Umhlanga, Durban, 4000</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'left',marginTop:10}}>• 0828366596</Text>
             

             </View>
             
         


         </View>
         </Card>

       </ScrollView>
        
       
         
         
 
         </SafeAreaView>
);
};

export default Contact;

const styles= StyleSheet.create({
 
    homescreenTextHeading: {
      color: 'black',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 23,
      textAlign: 'center',
      margin: 0,
      fontWeight: 'bold',
      flexDirection: 'row'

    },
    homescreenText: {
      color: 'black',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 11,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
      flexDirection: 'row'

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
   
 
 ImageMapSP:{
 width:300,
 height:200,
 shadowColor: 'black',
 alignSelf:'center',
 marginTop:15,
 

 

 },

 ImageMap:{
  width:60*3,
  height:20*9,
 
  shadowColor: 'black',
  alignSelf:'center',
  borderRadius: 100,
  
  borderColor:'black',
  borderWidth:4,
  
  marginTop:15,
 
  },
    sponsors:{
   
      marginTop:40,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10,
      
    },
    
 BackgroundImageandButton:{
 backgroundColor:'red',
height:200,
width:1000
 },

BuyNow:{
fontSize:15,
color:'Black',
},


 });