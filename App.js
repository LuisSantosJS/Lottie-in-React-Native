import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';
import {
  SafeAreaView,
  Dimensions,
  View,
  StatusBar
} from 'react-native'
import sea from './src/lottieJSON/sea.json'
import crocket from './src/lottieJSON/crocket.json'
import sun from './src/lottieJSON/sun.json'
var Sound = require('react-native-sound');

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function App() {
  const [x, setX] = useState(90)
  const [y, setY] = useState(200)
  const [play, setPlay] = useState(false)
  const sound = useRef(new Sound('seasound.mp3'))
  useEffect(() => {

    playSound()
    return playSound()
  },[])

  function playSound() {
    sound.current.play((success) => {
      if (!success) {
        console.log('Sound did not play')
        

      } else {
        setPlay(true)
      }
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}
      onTouchStart={(e) => {
        if(play == false){
          playSound()
        }
        setX(e.nativeEvent.pageX)
        setY(e.nativeEvent.pageY)
      }}>
      <StatusBar backgroundColor={'#E5E5E5'} barStyle={'dark-content'} />
      <View style={{ height: 200, width: 300, position: "absolute", top: y - 100, left: x - 150 }}
        onTouchStart={(e) => {
          if(play == false){
            playSound()
          }
          setX(e.nativeEvent.pageX)
          setY(e.nativeEvent.pageY)
        }}
        onTouchMove={(e) => {
          setX(e.nativeEvent.pageX)
          setY(e.nativeEvent.pageY)
        }}>
        <Lottie loop autoPlay source={crocket} resizeMode={'cover'} />
      </View>
      <View style={{ height: 150, width: 150, position: "absolute", top: 0, right: 0 }}>
        <Lottie loop autoPlay source={sun} resizeMode={'cover'} />
      </View>

      <View style={{ width: width, height: height / 2, top: height / 2, left: 0, right: 0 }}>

        <Lottie loop autoPlay source={sea} resizeMode={'cover'} />
      </View>
    </SafeAreaView>
  )
}