import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Card = ({ title, description, imageSource }) => {
    return (
        <View style={styles.card}>
            {imageSource && (
                <Image source={imageSource} style={styles.cardImage} />
            )}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   
        card: {
            backgroundColor: '#ffffff',
            padding: 20,
            margin: 10,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            width: 300, // Set a fixed width for the cards
        },
        
    
    title: {
        fontSize: 18, // Title font size
        fontWeight: 'bold', // Bold title
        marginBottom: 10, // Margin below title
    },
    description: {
        fontSize: 14, // Description font size
        color: '#666', // Description text colors
    },
    cardImage: {
        width: '100%', // Full width of the card
        height: 150, // Fixed height for the image
        borderRadius: 10, // Rounded corners for the image
        marginBottom: 10, // Margin below the images
    },
});

export default Card;
