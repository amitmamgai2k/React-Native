import React, { useState } from 'react';
import Card from "./card"; // Ensure the casing matches your file names
import { SafeAreaView, StyleSheet, ScrollView, RefreshControl, View } from 'react-native';

const App = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [cardsData, setCardsData] = useState([
        { id: 1, title: "Card 1", description: "Description for Card 1", imageSource: { uri: 'https://i.pinimg.com/736x/68/8d/d3/688dd325dbbdc238f4b70caffe77a5af.jpg' }},
        { id: 2, title: "Card 2", description: "Description for Card 2", imageSource: { uri: 'https://img.freepik.com/free-photo/digital-art-moon-tree-wallpaper_23-2150918811.jpg' }},
        { id: 3, title: "Card 3", description: "Description for Card 3", imageSource: { uri: 'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg' }},
        { id: 4, title: "Card 4", description: "Description for Card 4", imageSource: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K-aI_91gh82z1s2c7WUGmC4h0FM5hFXUFA&s' }},
    ]);

    const onRefresh = () => {
        setRefreshing(true);
        // Simulate an async operation
        setTimeout(() => {
            setRefreshing(false);
        }, 2000); // Adjust duration as needed
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.cardContainer}>
                    {cardsData.map(card => (
                        <Card 
                            key={card.id} 
                            title={card.title} 
                            description={card.description} 
                            imageSource={card.imageSource} 
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
    },
    cardContainer: {
        alignItems: 'center', // Center the cards horizontally
        justifyContent: 'center', // Center the cards vertically (if you have more than one on the screen)s
    },
});

export default App;
