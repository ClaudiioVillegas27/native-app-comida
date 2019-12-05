import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';

class inicio extends Component {

    render() {


        return (
            <ImageBackground 
            resizeMode='stretch' source={require('./../../../assets/registro.jpg')} style={style.Header}>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'App', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }} /> */}



                <View style={style.inicio}>

                    <View style={style.btn}>

                        <Icon
                            raised
                            name='address-book'
                            type='font-awesome'
                            color='#f50'
                            borderRadius='200'
                            onPress={() => console.log('hello')} />
                        <Text style={style.text}>Reportes</Text>
                    </View>
                    <View style={style.btn}>
                        <Icon
                            raised
                            name='database'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => console.log('hello')} />
                        <Text style={style.text}>Database</Text>
                    </View>
                    <View style={style.btn}>
                        <Icon
                            raised
                            name='home'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => this.props.navigation.navigate('registro')} />
                        <Text style={style.text}>Loremips</Text>
                    </View>
                </View>
            </ImageBackground>


        )
    }


}

const style = StyleSheet.create({
    inicio: {
        flex: 1,
        flexDirection:'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
    },
    text: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20,
        marginTop: 15,
        
    },
    btn: {
        marginBottom: 40,
        flexDirection: 'row',
        
    },
    Header: {
        flex: 1,
        backgroundColor: 'yellow'
    }


})

export default inicio
