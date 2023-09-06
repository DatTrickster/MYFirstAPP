import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import React, { useState , useEffect,} from 'react';
import { Card, Searchbar ,Checkbox, Menu,Divider, Provider,Button ,Banner} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
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
} from 'react-native';
import { transform } from '@babel/core';





const Home = ({ navigation}) => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    
<SafeAreaView >


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


<View > 
  <ScrollView >
<ImageBackground style={{height:1500, padding:10}} source={require('../screens/images/BackgroundImage.jpg')}>
         
   
 

<StatusBar  hidden={true} headerShown={false} />  



<View >




<View   style={styles.BookAndText}>

<Image style={styles.ImageMap} source={require('../screens/images/ETNTrans.png' )}>


</Image>
<Text style={styles.homescreenTextHeading}> Our Vision </Text>
<Divider style={{backgroundColor:'black'}}/>
<Text style={styles.homescreenText}>
The SME is an initiative by Precious Radebe to provide skills training for domestic workers and gardeners. The training makes them more marketable when seeking employment and enables them to be paid at a higher rate. They can also be entrepreneurs and setup their own small business utilising these newly obtained skills.
</Text>
<Divider style={{backgroundColor:'black',top:-10}}/>
</View>

 

 
 

   <View style={{height:150}}>
    <Text style={{textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,fontWeight:'bold'}}>Sponsors</Text>
    <Divider style={{backgroundColor:'black',top:10}}/>
<View style={styles.sponsors}>
<Image style={styles.ImageMapSP} source={require('../screens/images/sp1.png' )}/>
<Image style={styles.ImageMapSP} source={require('../screens/images/starbucks.png' )}/>
<Image style={styles.ImageMapSP} source={require('../screens/images/amz.png' )}/>
</View>

   </View>




   <Divider style={{backgroundColor:'black',top:100}}/>
</View>
<Divider style={{backgroundColor:'black',top:50}}/>
   <Text style={{bottom:-65,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,fontWeight:'bold'}}>Whats Trending:</Text>
<ScrollView horizontal >
  <View style={{bottom:-85,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Card style={styles.cardview}>
    <Image style={{width:200,height:100,alignSelf:'center'}} source={require('../screens/images/Landscaping.jpg' )}/>
<Text style={{bottom:-6,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,fontWeight:'600'}}>Price:R1500</Text>
<Button  mode="contained" buttonColor='#62b7de'  onPress={() => {navigation.navigate("Sewing")}} style={{ marginTop:16,
    width:110,
    alignSelf:'center',
    height:39}}>
    <Text style={{fontSize:10,}}>learn more</Text>
  </Button>
</Card>

<Card style={styles.cardview}>
    <Image style={{width:200,height:100,alignSelf:'center'}} source={require('../screens/images/Sewing.jpg' )}/>
<Text style={{bottom:-6,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,fontWeight:'600'}}>Price:R1500</Text>
<Button  mode="contained" buttonColor='#62b7de'  onPress={() => {navigation.navigate("Sewing7")}} style={{ marginTop:16,
    width:110,
    alignSelf:'center',
    height:39}}>
    <Text style={{fontSize:10,}}>learn more</Text>
  </Button>
</Card>

<Card style={styles.cardview}>
    <Image style={{width:200,height:100,alignSelf:'center'}} source={require('../screens/images/cook.jpg' )}/>
<Text style={{bottom:-6,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,fontWeight:'600'}}>Price:R1500</Text>
<Button  mode="contained" buttonColor='#62b7de'  onPress={() => {navigation.navigate("Sewing2")}} style={{ marginTop:16,
    width:110,
    alignSelf:'center',
    height:39}}>
    <Text style={{fontSize:10,}}>learn more</Text>
  </Button>
</Card>
  </View>

</ScrollView>


<View style={{top:-150,height:400}}>
<Divider style={{backgroundColor:'black',top:100}}/>
<Divider style={{backgroundColor:'black',top:50}}/>
   <Text style={{bottom:-65,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:20,fontWeight:'bold'}}>Recommended:</Text>
<ScrollView horizontal >
  <View style={{bottom:-100,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Card style={styles.cardview}>
    <Image style={{width:200,height:100,alignSelf:'center'}} source={require('../screens/images/Garden.jpg' )}/>
<Text style={{bottom:-6,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,fontWeight:'600'}}>Price:R750</Text>
<Button  mode="contained" buttonColor='#62b7de'  onPress={() => {navigation.navigate("Sewing6")}} style={{ marginTop:16,
    width:110,
    alignSelf:'center',
    height:39}}>
    <Text style={{fontSize:10,}}>learn more</Text>
  </Button>
</Card>

<Card style={styles.cardview}>
    <Image style={{width:200,height:100,alignSelf:'center'}} source={require('../screens/images/aid.jpg' )}/>
<Text style={{bottom:-6,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,fontWeight:'600'}}>Price:R1500</Text>
<Button  mode="contained" buttonColor='#62b7de'  onPress={() => {navigation.navigate("Sewing3")}} style={{ marginTop:16,
    width:110,
    alignSelf:'center',
    height:39}}>
    <Text style={{fontSize:10,}}>learn more</Text>
  </Button>
</Card>

<Card style={styles.cardview}>
    <Image style={{width:200,height:100,alignSelf:'center'}} source={require('../screens/images/Skills.png' )}/>
<Text style={{bottom:-6,textAlign:'center',color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,fontWeight:'600'}}>Price:R1500</Text>
<Button  mode="contained" buttonColor='#62b7de' onPress={() => {navigation.navigate("Sewing4")}} style={{ marginTop:16,
    width:110,
    alignSelf:'center',
    height:39}}>
    <Text style={{fontSize:10,}}>learn more</Text>
  </Button>
</Card>
  </View>

</ScrollView>
</View> 

  </ImageBackground>  
  
   </ScrollView>
</View>    
  </SafeAreaView>
  
);
  }
 
  export default Home;
  
 
  const styles= StyleSheet.create({
 
cardview:{
  backgroundColor:'white',
  height:200,
  width:200,
  margin:10
},


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
      fontFamily:'Anek Kannada Regular',
      color: 'black',
      padding: 10,
      fontWeight: 'bold',
      letterSpacing:1.5,
      lineHeight:30,
      fontSize: 18,
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
 width:100,
 height:100,
 shadowColor: 'black',
 alignSelf:'center',
 marginTop:15,
 top:15

 

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
   
      marginTop:0,
   
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