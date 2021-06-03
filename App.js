import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localDb';
import PhonicButton from './components/phonicSound';

/*console.log(db['for'].chunks);
console.log(db['for'].phones);*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayChunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#f45a66'}
          centerComponent={{
            text: 'Monkey Chunky App',
            style: { color: '#ffffff', fontSize: 20 },
          }}
        />
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(input) => {
            this.setState({ text: input });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.buttonStyling}
          onPress={() => {
            var word = null;
            word = db[this.state.text];
            console.log(word);
            
            /*if (word !== undefined) {
              this.setState({ displayChunks: db[this.state.text].chunks });
              //console.log(this.state.displayChunks);
              this.setState({ phonicSounds: db[this.state.text].phones });
              //console.log(this.state.phonicSounds);
            } 
            else {
             alert('This word does not exist in the database.');
            }*/


            //using ternary operator
            (word !== undefined)?(
              //true
              this.setState({ displayChunks: db[this.state.text].chunks }),
              //console.log(this.state.displayChunks);
              this.setState({ phonicSounds: db[this.state.text].phones })
              //console.log(this.state.phonicSounds);
            ):
            
              
              alert('This word does not exist in the database.');
           
            
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 7,
              marginLeft: '12%',
            }}>
            Go
          </Text>
        </TouchableOpacity>

        <View>
          {this.state.displayChunks.map((item, index) => {
            return (
              /*<TouchableOpacity style = {styles.chunkButtonStyle}>
              <Text style = {styles.chunkText}>
               {item}
              </Text>
             </TouchableOpacity>*/
              <PhonicButton
                wordChunk={this.state.displayChunks[index]}
                soundChunks={this.state.phonicSounds[index]}
                buttonIndex={index}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    height: 30,
    width: 200,
    textAlign: 'center',
    borderWidth: 5,
    marginTop: '10%',
    marginLeft: '25%',
  },
  buttonStyling: {
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    marginLeft: '37%',
  },
});
