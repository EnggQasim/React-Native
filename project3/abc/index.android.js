// Index.ios.js - place code in here for ios
// Import a library to help create component
 import React from 'react';
 import { AppRegistry, View } from 'react-native';
 import Header from './src/components/Header';
 import AlbumList from './src/components/AlbumList';
 // Create component
 const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Sir Zia Khan'} />
        <AlbumList />
    </View>
);

 // Render it to the device

 AppRegistry.registerComponent('abc', () => App);
