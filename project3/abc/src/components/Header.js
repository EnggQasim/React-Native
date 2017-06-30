// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#f00',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        position: 'relative',
    }
};

export default Header;

// Make the component available
