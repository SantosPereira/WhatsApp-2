import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack'


function Conversas() {
  return (
    <View>
      <Text>Conversas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Status() {
  return (
    <View>
      <Text>Status do zap</Text>
    </View>
  );
}

function Chamadas() {
  return (
    <View>
      <Text>Chamadas</Text>
    </View>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Conversas" component={Conversas}/>
        <Stack.Screen name="Status" component={Status}/>
        <Stack.Screen name="Chamadas" component={Chamadas}/>
      </Stack.Navigator>
    </NavigationContainer>
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
