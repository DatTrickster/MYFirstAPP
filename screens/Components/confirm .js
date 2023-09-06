import {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState , useEffect,} from 'react';
import { Card, Searchbar ,Checkbox, Menu,Divider, Provider,Button ,Banner,TextInput,TextInputProps,TextInputAffixProps,HelperText} from 'react-native-paper';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  Image,
  View,
  StatusBar,
  Platform,
  Pressable,
  FlatList,
} from 'react-native';

import { Fonts,Font } from 'react-native-paper/lib/typescript/types';
import { newArray,objectarray } from '../values/values';
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

const Confirm = ({navigation}) =>{
    const [text, setText] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [PHonenumber, setTextPHonenumber] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const onChangeText = Email => setEmail(text);
  const hasErrors = () => {
    return !Email.includes('@gamil.com'|| '@');
  };




  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const route=useRoute();
  let Total=route.params?.discountAmount;
let discount=route.params?.discount;

  let sum= 0

    for (let i =0; i<newArray.length; i++){
    
      sum += newArray[i];
    }


  
const [checked, setChecked] = React.useState(false);
  const isemptyComp = () => (
    <SafeAreaView >

      <View style={{justifyContent:'center',height:500,}}>
          <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10,fontFamily:'Anek Kannada Regular'
}}>Cart empty</Text> 
      </View>
   
  
  
   
  </SafeAreaView>
  );


const Item = ({title,Price}) => (
  
  <SafeAreaView >
     <View style={{padding: 10}}>
    <View style={{height:15,alignItems:'center',margin:10,flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',height:55,alignItems:'center',margin:5,padding:10,flex:2}}>
  
      <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>{title}</Text> 
      <Text style={{ fontSize: 20, padding: 0,color:'black',textAlign:'center',marginBottom:10}}>R{Price}</Text> 

    </View>
        
   
    </View>
    </View>  
</SafeAreaView>
);


const renderItem = ({item}) => (
  
  <Item title={item.title} Price={item.Price} />
  
);


  
return(
  <SafeAreaView>

<View style={{flexDirection:'row',justifyContent:'space-between', padding:20, alignItems:'center',backgroundColor:'white',zIndex:2}} >



<Pressable>
  <Ionicons name="md-arrow-back" style={{fontSize:30, color:'black'}} onPress={()=> navigation.goBack()}/>
  </Pressable>
 </View>

         <Card style={{height:170,padding:1,borderColor:'black',borderWidth:1,borderRadius:0}}>
                            <FlatList
      refreshing
      ListEmptyComponent={isemptyComp}
      extraData={objectarray}
      data={objectarray}
      renderItem={renderItem}
      scrollEnabled
      
   />   
                </Card>
       
         <View style={{padding:20}}>
           
        
      
        
     



     <View style={{padding: 10, 

flexDirection:'column', 
backgroundColor:'white',
height:500,

borderRadius:5

}}>
<ScrollView>
       <View style={{height:600}} >
    
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>Total + Vat : R{Total}</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>discount : {discount}</Text>
             <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:15,textAlign:'left',marginTop:10}}>Number of Courses: {objectarray.length}</Text>
            <Text style={{color:'black',fontFamily:'Anek Kannada Regular',fontSize:25,textAlign:'left',marginTop:10,textAlign:'center',marginBottom:10}}> confirm booking</Text>
             <Divider/>
       
      <TextInput
      mode='outlined'
      style={{marginBottom:10}}
      label="Name"
      value={text}
      onChangeText={text => setText(text)}
    />
               <Divider/>
       
       <TextInput
        mode='outlined'
         style={{marginBottom:10}}
       label="phone number"
       value={PHonenumber}
       onChangeText={PHonenumber => setTextPHonenumber(PHonenumber)}
     />
      <HelperText type="error" visible={hasErrors(onChangeText)}>
        Email address is invalid!
      </HelperText>

                <Divider/>
                <Divider/>
       <TextInput
        mode='outlined'
         style={{marginBottom:10}}
       label="Email"
       value={Email}
       onChangeText={Email => setEmail(Email)}
     />
                <Divider/>
                <Button  mode="contained" onPress={() => {console.log('Pressed');
                if(text==''|| !Email.includes('@' && '.') ||PHonenumber==''){

                  Alert.alert(
                    "invaild",
                    "Please check your details you may have missed something",
                    [
                      { text: "OK" , onPress:()=> {}}
                    ]
                  )

                }else{


                  Alert.alert(
                    "Thank you for enquiring",
                    "We will be in contact with you soon",
                    "if you have any issues please visit our contact page",
                    [
                      { text: "OK" , onPress:()=> {}}
                    ]
                  )

                  while(objectarray.length > 0) {
                    objectarray.pop();
                }
                while(newArray.length > 0) {
                  newArray.pop();
              }
                  navigation.navigate('Shopping')

                }
              }} style={{ marginTop:10,
    width:100,
    alignSelf:'center'}}>
    Book
  </Button>
 
    </View>

</ScrollView>   
    </View>

    
 
         </View>
       
 
         </SafeAreaView>
);
};

export default Confirm