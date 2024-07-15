import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <>
    <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
    <Home/>
    </>
  );
}