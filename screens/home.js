import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';
import SpaceCraft from './spaceCraft';

export default class Home extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <ImageBackground source = {require("../assets/bg_image.png")}>
            <Text style = {styles.titleText}>Stellar App</Text>
            <TouchableOpacity style = {styles.rootCard} onPress = {()=>{
                this.props.navigation.navigate("SpaceCraft")
            }}>
              <Text style = {styles.routeText}>Space Crafts</Text>
              <Image source = {require("../assets/rocket_icon.png")} style = {{width:80,height:80}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rootCard} onPress = {()=>{
                this.props.navigation.navigate("StarMap")
            }}>
              <Text style = {styles.routeText}>Star Map</Text>
              <Image source = {require("../assets/star_map.png")} style = {{width:80,height:80}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rootCard} onPress = {()=>{
                this.props.navigation.navigate("DailyPic")
            }}>
              <Text style = {styles.routeText}>Daily Pictures</Text>
              <Image source = {require("../assets/daily_pictures.png.png")} style = {{width:80,height:80}}></Image>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight:0
    },
    titleText:{
        fontSize:30,
        color:"white",
        alignContent:"center"
    },
    rootCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
        borderWidth:2
    },
    routeText:{
      fontSize:25,
      fontWeight:"bold",
      color:"black",
      marginTop:75,
      paddingLeft:30,
    },
})