import * as React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

 class PhonicButton extends React.Component{

constructor(props){
  super(props);
  this.state = {
    pressedButtonIndex: ''
  }
}
  playAudio = async (soundChunks) => {
    var audioLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunks + '.mp3';
    await Audio.Sound.createAsync({
      uri: audioLink,
    },
    {shouldPlay: true}
    );

  }

   render(){

     return (
       <View style = {styles.container}>
       
       <TouchableOpacity
       
        style = {
          (this.props.buttonIndex === this.state.pressedButtonIndex)?
          [
            styles.chunkButtonStyle,
            {backgroundColor: 'green'}
          ]
          :
          [
            styles.chunkButtonStyle
          ]

          
          }

    onPress = {()=>{
     this.setState({pressedButtonIndex: this.props.buttonIndex});
     this.playAudio(this.props.soundChunks).toUpperCase();
     }}

       >
       <Text style = {
         (this.props.buttonIndex === this.state.pressedButtonIndex)?
          [
            styles.chunkText,
            {color: 'orange'}
          ]
          :
          [
            styles.chunkText
          ]

       } >
       {this.props.wordChunk}
       </Text>
       </TouchableOpacity>
      </View>
     );
     
   }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  chunkText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 20,
  },
  chunkButtonStyle: {
    height: 50,
    width: 100,
    alignSelf: 'center',
    backgroundColor: 'skyblue',
    marginTop: 10,
  },
});

 export default PhonicButton;