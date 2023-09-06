import {Node} from 'react';
import SelectList from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';
 import { mainOBJ, newArray, objectarray, Totalhistory, wish } from './values/values';
import { Card, Searchbar ,Checkbox, Menu,Divider, Provider,Button, } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
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
import { transform } from '@babel/core';
import { Fonts } from 'react-native-paper/lib/typescript/types';





const DATA = [
  {
    id: '1B',
    title: 'Landscaping',
    Price:1500,
    image: require('../screens/images/Landscaping.jpg'),
    description: 'dummy data',

  },

  {
    id: '2B',
    title: 'Cooking',
    Price:750 ,
    image: require('../screens/images/cook.jpg'),
    description: 'dummy data',
   
  },
  

  {
    id: '3B',
    title: 'First-Aid',
    Price:1500,
    image: require('../screens/images/aid.jpg'),
    description: 'dummy data',
 
  },

  {
    id: '4B',
    title: 'Life Skills',
    Price:1500,
    image: require('../screens/images/Skills.png'),
    description: 'dummy data',
   
  },

  {
    id: '5B',
    title: 'Child Minding',
    Price:750,
    image: require('../screens/images/child.png'),
    description: 'dummy data',
   
  },

  {
    id: '6B',
    title: 'Garden Maintenance',
    Price:750,
    image: require('../screens/images/Garden.jpg'),
    description: 'dummy data',
    
  },

  {
    id: '7B',
    title: 'Sewing',
    Price:1500,
    image: require('../screens/images/Sewing.jpg'),
    description: 'dummy data',
    
  },


];



const styles = StyleSheet.create({
  
  item: {
   padding: 10, 
   margin: 15 ,
   flexDirection:'column', 
   backgroundColor:'white',
   display:'flex',
   flex:1,
   borderRadius:5
  },
  title: {
    fontSize: 32,
    color:'black'
  },
  boxSizing:{
    marginBottom:20,
    marginTop:20,
    alignSelf:'center',
    borderRadius:30,
    width:300,
    backgroundColor:'#fff',
    borderWidth:0,
  borderColor:'#fff'
  
  },
  
  dropBackground:{
  backgroundColor:'#ffffff',
  borderWidth:0.5,
  borderColor:'white'
  },
  
  dropdown:{
    padding:10,
  fontSize:15,
    color:'#3d15a3',
  
  },
  
  textcolor:{
      fontSize:15,
  alignSelf:'center',
      color:'#3d15a3'
      
  },
});


const Shop = ({ navigation}) =>{
  

 
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);




  const Item = ({title,image,Price,id}) => (
    
    <SafeAreaView>

        <Card style={styles.item}>
  
 
    
    
         <Image source={image} style={{width:300, height:150, borderRadius:5,flex:2,justifyContent:'center',alignSelf:'center',top:15}}/>
       
        <View style={{color:'red',alignSelf:'center',bottom:-210,left:125,borderRadius:20,borderWidth:6,borderColor:'white'}}>
  <Pressable 
   onPress={()=>{
    
wish.push({title,Price});
console.log(wish)}}

  
  
  >
  <Ionicons name="heart" style={{fontSize:30,color:'red',backgroundColor:'white'}}/>
  </Pressable>
          </View>
      
  <View style={{margin:20}}>
  <View >       
  <Text style={{ fontSize: 30, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>{title}</Text>
  
  </View>

  <View style={{flexDirection:'column',width:100,marginTop:10,alignSelf:'center'}}>
  <Text style={{ fontSize: 15,color:'black',marginBottom:15,alignSelf:'center',textAlign:'center'}}>Price : R{Price} </Text>
  </View>

  <Pressable  style={{ fontSize: 20, padding: 5 ,color:'blue',alignSelf:'center',textAlign:'center',width:150,bottom:5}} onPress={()=>{
    
     if(id=='1B'){navigation.navigate("Sewing")}
else if (id=='2B'){navigation.navigate("Sewing2")}
else if (id=='3B'){navigation.navigate("Sewing3")}
else if (id=='4B'){navigation.navigate("Sewing4")}
else if (id=='5B'){navigation.navigate("Sewing5")}
else if (id=='6B'){navigation.navigate("Sewing6")}
else if (id=='7B'){navigation.navigate("Sewing7")}

}}>
  <Text style={{ fontSize: 15,color:'blue',alignSelf:'center'}}>Learn more</Text>
  </Pressable >


  <View style={{marginBottom:20,alignSelf:'center',marginTop:10}}>
  <Button  
  style={{width:100,padding:5,backgroundColor:'#efefef'}}
   onPress={()=>{
    newArray.push(Price);
    objectarray.push({title,Price,id});
    let sum= 0
    for (let i =0; i<newArray.length; i++){
      sum += newArray[i];
    }
    console.log("sum is =",sum)
console.log(newArray)

 
    }}>
  <Text style={{ fontSize: 15,color:'black',alignSelf:'center',textAlign:'center'}}>Add to Cart</Text>
  </Button>
  
 
  
  </View>


  </View>
     </Card>
  
  </SafeAreaView>

  );






  const renderItem = ({ item }) => (
    
    <Item title={item.title} id={item.id} image={item.image} Price={item.Price} state={item.state}/>
    
);

  return (
   
    /*Learning course page*/
    <SafeAreaView style={{margin:1,maxHeight:600,minHeight:500}}>
   
  
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


<ImageBackground source={require('../screens/images/BackgroundImage.jpg')} style={{zIndex:1}}>

<View style={{flexDirection:'row',display:'flex',justifyContent:'space-around',padding:15}}>
<Button mode="contained" buttonColor='#62b7de'  onPress={() => {console.log('Pressed');  
navigation.navigate("SixWeek")}}>
    Six Week Courses
  </Button>
  <Button mode="contained" buttonColor='#6293de'  onPress={() => {console.log('Pressed');  
navigation.navigate("SixMonth")}}>
  Six Month Courses
  </Button>
</View>

<FlatList

        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      
      />
</ImageBackground>
    </SafeAreaView>








 
  );
  }



  export default Shop