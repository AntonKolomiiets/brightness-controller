import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import Slider from '@react-native-community/slider'
import * as Brightness from 'expo-brightness';

import * as BrightnessController from 'brightness-controller';

export default function App() {
  const [brightness, setBrightnessState] = useState(0.5);
  const [expoBrightness, setExpoBrightness] = useState(0.5);
  const [currentBrightness, setCurrentBrightness] = useState(0.5);

  useEffect(() => {
    const fetchBrightness = async () => {
      const brightnessLevel = await Brightness.getBrightnessAsync();
      setCurrentBrightness(brightnessLevel);
      setBrightnessState(brightnessLevel);
    };
    
    fetchBrightness();
  }, []);


  const handleBrightnessChange = async (value: number) => {
    setBrightnessState(value);
    try {
      await BrightnessController.setBrightness(value);
      const updatedBrightness = await Brightness.getBrightnessAsync();
      setCurrentBrightness(updatedBrightness);
    } catch (error) {
      console.error("Error setting brightness: ", error);
      Alert.alert("Error", "Could not set brightness.");
    }
  };

  const handleExpoBrightnessChange = async (value: number) => {
    setExpoBrightness(value);
    try {
      await Brightness.setBrightnessAsync(value);
      const updatedBrightness = await Brightness.getBrightnessAsync();
      setCurrentBrightness(updatedBrightness);
    } catch (error) {
      console.error("Error setting brightness: ", error);
      Alert.alert("Error", "Could not set brightness.");
    }
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Current Brightness: {currentBrightness}</Text>

      <Text style={{ marginTop: 20 }}>Custom Brightness Controller</Text>
      
      <Slider
        style={{ width: 200 }}
        minimumValue={0}
        maximumValue={1}
        value={brightness}
        onValueChange={handleBrightnessChange}
      />
      <Button title="Set Brightness" onPress={() => BrightnessController.setBrightness(brightness)} />

      <Text style={{ marginTop: 20 }}>Expo Brightness Controller</Text>
      <Slider
        style={{ width: 200 }}
        minimumValue={0}
        maximumValue={1}
        value={expoBrightness}
        onValueChange={handleExpoBrightnessChange}
      />
      <Button title="Set Expo Brightness" onPress={() => handleExpoBrightnessChange(expoBrightness)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
