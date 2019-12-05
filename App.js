import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Alert ,ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import inicio from './src/modules/inicio/inicio';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';
import registro from './src/modules/registro/registro'

class principal extends Component {
  static navigationOptions = {
    header: null
}

  render() {

    return (
      
      <ImageBackground resizeMode='stretch' source={require('./assets/registro.jpg')} style={style.container}>

        <View style={style.header}>

          <View style={style.headerleft}>
           
          </View>



          <View style={style.headeright}>
          
          </View>

        </View>



        <View style={style.body}>
        {/* <Image source={require('./assets/comida.png')}/> */}
        <Text style= {{fontSize:30,marginTop:15,color:'white',fontSize:60,fontStyle:'italic'}}> Bienvenido </Text>
      <View style={style.btn_ingresar}>
        <Button  title="Ingresar" onPress={() => this.props.navigation.navigate('inicio')} />
        </View>
        </View>

      </ImageBackground>



    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'

  },
  header: {
    flex:1,
    flexDirection:'row'
  },
  headeright: {
    flex: 1
    

  },
  headerleft: {
    flex: 1
   

  },
  body: {
    flex: 5,
    alignItems:'center',
    marginTop:250
  },
  btn_ingresar : {
    flex:1,
    width:250,
    borderRadius:50,
    marginTop:'30%'
  }


})

const AppNavigator = createStackNavigator({
  portada: {
    screen: principal,
    navigationOptions:{
      title:'App'
    }
  },
  inicio:{
    screen:inicio,
    navigationOptions:{
      title:'App'
    }
  },
  registro:{
    screen:registro,
    navigationOptions:{
      title:'App'
    }
  }
},{headerLayoutPreset:'center'});

export default createAppContainer(AppNavigator);
