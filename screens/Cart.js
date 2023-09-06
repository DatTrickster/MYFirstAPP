import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';
import { Card, Searchbar ,Checkbox, Menu,Divider, Provider,Button ,Banner} from 'react-native-paper';

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

import { Fonts,Font } from 'react-native-paper/lib/typescript/types';
import { newArray, objectarray, Totalhistory } from './values/values';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
const styles = StyleSheet.create({
  BTNcheck:{
    marginTop:10,
    width:200,
    alignSelf:'center'
  },
  
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
});



const CartMain = ({navigation}) =>{
  
const [state,Setstate]=useState(objectarray)
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);



  let sum= 0

    for (let i =0; i<newArray.length; i++){
    
      sum += newArray[i];
    }


  

  const isemptyComp = () => (
    <SafeAreaView >
    <ScrollView>
      <View style={{justifyContent:'center',height:500,}}>
          <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10,fontFamily:'Anek Kannada Regular'
}}>Cart empty</Text> 
      </View>
   
    </ScrollView>
  
   
  </SafeAreaView>
  );

const Item = ({title,Price,id}) => (
  
  <SafeAreaView >
     <View style={{padding: 10}}>
    <Card style={{height:65,alignItems:'center',margin:10,flexDirection:'row'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',height:55,alignItems:'center',margin:5,padding:10}}>
  
      <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>{title}</Text> 
      <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>R{Price}</Text> 
      <Button onPress={()=>{
while(newArray.length > 0 || objectarray.length>0|| Totalhistory.length>0) {
  newArray.pop(0);
  objectarray.pop(0);
  Totalhistory.pop(0);
  console.log("new array=",newArray)
  console.log("new object array=",objectarray)
  console.log("new total array=",Totalhistory)
  navigation.navigate("Shopping")
}
        
      }}><Text>Delete</Text></Button>
    </View>
        
   
    </Card>
    </View>  
</SafeAreaView>
);


const renderItem = ({item}) => (
  
  <Item title={item.title} Price={item.Price} id={item.id} />
  
);


  
return(
  <SafeAreaView>

<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=> navigation.goBack()}/>
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

 
       
         <View style={{padding:20,height:630}}>
      <FlatList
      refreshing
      ListEmptyComponent={isemptyComp}
      extraData={state}
      data={state}
      renderItem={renderItem}
   
      
      />



     <View style={{padding: 10, 
marginBottom:5,
flexDirection:'column', 
backgroundColor:'white',


borderRadius:5

}}>

       <View style={{height:80}}>
    
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>Total : R{sum}</Text>
           
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>Number of Courses: {objectarray.length}</Text>
       
    </View>
    </View>
   
    
 
  <Button icon="cart" mode="contained" onPress={() => {console.log('Pressed');

  if(newArray.length==0){
    Alert.alert(
      "warning",
      "your cart is empty please select a product",
      [
        { text: "OK" , onPress:()=> {navigation.navigate("Shopping")}}
      ]
    )
    
  }
 else if(newArray.length<2){
  const VAT= sum*0.15
   const subtotal= sum+VAT
console.log('no discount was applied');
navigation.navigate({
                
  name: 'forms',
  params: {
    discount:'0%',
  discountAmount:subtotal,
 
  },
  merge: true,});

  }
else if(newArray.length<3){
 
  const VAT= sum*0.15
  const totalVat= VAT+sum
 const discount1= totalVat*0.5
 const subtotal= totalVat-discount1
 const discount= subtotal
navigation.navigate({
                
  name: 'forms',
  params: {
    discount:'5%',
  discountAmount:discount,
 
  },
  merge: true,});

}
else if(newArray.length<4){
 
  const VAT= sum*0.15
  const totalVat= VAT+sum
 const discount1= totalVat*0.1
 const subtotal= totalVat-discount1
 const discount= subtotal
console.log ('total with vat and discount',discount)
console.log(discount1)
console.log(VAT)

navigation.navigate({
                
  name: 'forms',
  params: {
    discount:'10%',
  discountAmount:discount,

  },
  merge: true,});
}

else if(newArray.length>3){
 
  const VAT= sum*0.15
  const totalVat= VAT+sum
 const discount1= totalVat*0.15
 const subtotal= totalVat-discount1
 const discount= subtotal
console.log ('total with vat and discount',discount)
console.log(discount1)
console.log(VAT)

navigation.navigate({
                
  name: 'forms',
  params: {
    discount:'15%',
  discountAmount:discount,

  },
  merge: true,});
}

}} style={styles.BTNcheck}>
    Check Out
  </Button>
         </View>
       
 
         </SafeAreaView>
);
};

export default CartMain