import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';

import { Card, List, Searchbar } from 'react-native-paper';
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

const Sewing = ({navigation}) =>{


  
return(
  <SafeAreaView style={{height:700}}>
<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
 
       <ScrollView>
         <View style={{backgroundColor:'green',height:200,padding:1}}>
         <Image  source={require('../images/Landscaping.jpg' )} style={{width:400,height:200,borderRadius:5,flex:2,alignSelf:'center'}}/>
         </View>
         
          <Card  style={{padding: 10, 
   margin: 15 ,
   flexDirection:'column', 
   backgroundColor:'white',
   display:'flex',
   flex:1,
   borderRadius:5}}>
 
            <View>
           
             <Text style={{color:'black',fontSize:40,textAlign:'center',marginBottom:20}}>Landscaping</Text>
           
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,textAlign:'center'}}> Fees: R1500 </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Description: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}> A landscaper is a professional needed to maintain the beauty of gardens, parks and other outdoor spaces. Duties can include making sure plants grow well in their assigned area as well as cleaning up debris around yards and other areas </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}>Course Purpose: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'center'}}>To provide landscaping services for new and established gardens. </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Course Content: </Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Indigenous and exotic plants and trees</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Aesthetics of plant shapes and colours</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>• Garden layout'</Text>
             <View>
              
             </View>
             
         


         </View>
         </Card>
       </ScrollView>
        
       
         
         
 
         </SafeAreaView>
);
};

export default Sewing;