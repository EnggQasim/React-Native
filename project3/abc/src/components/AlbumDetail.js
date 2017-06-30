import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        thumnailContainerStyle, 
        headerContentSytle,
        headerTextStyle,
        imageStyle
     } = styles;
    return (
        <Card key={title}>
            <CardSection>
                <View style={thumnailContainerStyle} >
                    <Image
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentSytle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>

            <CardSection>
                <Image
                style={imageStyle}
                source={{ uri: image }} 
                />
            </CardSection>  

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
          
        </Card>
    );
};

const styles = {
    headerContentSytle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
export default AlbumDetail;