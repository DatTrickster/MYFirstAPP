import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';

import { Card, List, Searchbar ,Avatar,Provider,Menu,Divider,Button} from 'react-native-paper';
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

  StatusBar,
  Platform,
  Pressable,
  FlatList
} from 'react-native';

const Profile = ({navigation}) =>{


  
return(
  <SafeAreaView>
<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=>navigation.goBack()}/>
  </Pressable>
  



 
</View>
 
 
       <ScrollView>
   
           
         <View style={{padding:20}}>
         <Avatar.Text size={100} style={{alignSelf:'center'}} label="JM" />
         </View>
         
          <Card  style={{padding: 10, 
   margin: 15 ,
   flexDirection:'column', 
   backgroundColor:'white',
   display:'flex',
   flex:1,
   height:400,
   borderRadius:5}}>
 
            <View>
           
        
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'center',marginTop:10}}> Profile: </Text>
             <Divider style={{backgroundColor:'black',padding:1}}/>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:17,textAlign:'left',marginTop:10}}>Name : Jhonney </Text>
             <Divider style={{backgroundColor:'#cccccc'}}/>
             <Divider style={{backgroundColor:'#cccccc'}}/>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:17,textAlign:'left',marginTop:10}}>Surname : Chan</Text>
             <Divider style={{backgroundColor:'#cccccc'}}/>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:17,textAlign:'left',marginTop:10}}>Email : jC@gmail@gmail.com</Text>
             <Divider style={{backgroundColor:'#cccccc'}}/>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:17,textAlign:'left',marginTop:10}}>Cell: 081 567 8900</Text>
             <Divider style={{backgroundColor:'#cccccc'}}/>
             <View>
              <Button style={{top:80,backgroundColor:'red',width:100, alignSelf:'center'}}>
                <Text style={{color:'white'}}>
                  Sign out
                </Text>
              </Button>
             </View>
             
         


         </View>
         </Card>
       </ScrollView>
        
       
         
         
 
         </SafeAreaView>
);
};

export default Profile;