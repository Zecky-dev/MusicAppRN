import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../Card/Card.style';

const Card = ({item}) => {
    return (
        // Card container
        <View style={styles.cardContainer}>
            {/* Image Container*/}
            <View style={styles.firstContainer}>
                <Image
                    source={{uri:item.imageUrl}}
                    style={styles.image}
                />
            </View>

            {/* Middle Container(Info) */}
            <View style={styles.middleContainer}>
                <Text style={styles.name}>
                    {item.title}
                </Text>
                <View style={styles.middleSubContainer}>
                    <Text style={styles.artist}>
                        {item.artist}
                    </Text>
                    <Text style={styles.year}>
                        {item.year}
                    </Text>
                </View>
                <Text style={styles.album}>
                    Album: {item.album}
                </Text>
            </View>

            {/* Last Container (In stock)*/}
            <View style={styles.lastContainer}>
                {item.isSoldOut ? <Text style={styles.isSoldOut}>TÜKENDİ</Text> : null}
            </View>

        </View>
    );
};

export default Card;
