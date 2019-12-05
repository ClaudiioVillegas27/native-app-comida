import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Button, Icon, Header, Input } from 'react-native-elements';

import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
            email: t.String,
            username: t.String,
            password: t.String,
            terms: t.Boolean
        });
        const style = StyleSheet.create({

            container: {
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
        
            },
            group_input: {
                width:300,
                justifyContent: 'center',
                marginTop: 50,
                padding: 20,
                color:'white'
        
            },
            input: {
                flex: 1,
                color: 'black',
                fontSize: 100
        
            },
            form:{
                color:'white'
            }
        
        })


        const options = {
            stylesheet: style.form
          };

          
class registro extends Component {

   
    render() {
        
     
        return (
            <ImageBackground source={require('./../../../assets/registro.jpg')} style={style.container} >

                <View style={style.group_input}>

                    <Form
                        type={User}
                        options={options}
                        />
                </View>


            </ImageBackground>
        )
    }


}


export default registro;