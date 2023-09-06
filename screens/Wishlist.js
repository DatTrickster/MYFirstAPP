import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';
import { Card, Searchbar ,Checkbox, Menu,Divider, Provider,Button, } from 'react-native-paper';
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
  FlatList,
  
} from 'react-native';
import { objectarray, wish } from './values/values';
import { transform } from '@babel/core';


const Wishlist = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
const isemptyComp = () => (
  <SafeAreaView >
  <ScrollView>
    <View style={{justifyContent:'center',height:500,}}>
        <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10,fontFamily:'Anek Kannada Regular'
}}>Wishlist empty</Text> 
    </View>
 
  </ScrollView>

 
</SafeAreaView>
);

  const Item = ({title,Price}) => (
  
    <SafeAreaView >
    <View style={{padding: 10}}>
   <Card style={{height:65,alignItems:'center',margin:10,flexDirection:'row'}}>
   <View style={{flexDirection:'row',justifyContent:'space-between',height:55,alignItems:'center',margin:5,padding:10}}>
 
     <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>{title}</Text> 
     <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>R{Price}</Text> 
   </View>
       
  
   </Card>
   </View>  
</SafeAreaView>
  );
  
  
  const renderItem = ({item}) => (
    
    <Item title={item.title} Price={item.Price}/>
    
  );

      return (
      <SafeAreaView>
 <View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
<Ionicons name="cart-outline" style={{fontSize:30, color:'black'}} onPress={()=>navigation.navigate("Cart")}/>
</Pressable>
  
<Provider>
    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
       <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Pressable  onPress={openMenu}>
        <Ionicons style={{fontSize:30, color:'black'}} name="md-menu"></Ionicons>
        </Pressable>}>
        <Menu.Item onPress={() => {navigation.navigate('profile')}} title="Profile" />
        <Divider />
        <Menu.Item onPress={() => {navigation.navigate('contact')}} title="Contact us" />
    
     
      </Menu>
    </View>
     
    
  </Provider>


 
</View>
         
  
   
   
   

          <View style={{ flexDirection: 'column',  borderBottomColor: 'black',}}>  
      <FlatList
      scrollEnabled={true}
      ListEmptyComponent={isemptyComp}
      data={wish}
      renderItem={renderItem}
      />
        
   </View>

   
          
          </SafeAreaView>
      );
    
  }
  
  export default Wishlist;