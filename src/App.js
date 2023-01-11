import React, { useState } from 'react';
import {FlatList, View, TextInput} from 'react-native';
import styles from './styles/App.style';
import Card from './components/Card/Card';
import data from './data/music-data.json';

const App = () => {
    const [listSongs, setListSongs] = useState(data);
    const dataSongs = data;
    let searchedSongs;


    const renderSeperator = () => {
        return <View style={styles.seperator}/>;
    };
    
    return (
        <View style={styles.container}>
            {/* Searchbar */}
            <TextInput placeholder="Ara.." style={styles.searchBar} onChangeText={(text) => {
                let searchText = text.toLowerCase();
                if (searchText !== ""){
                    searchedSongs = dataSongs.filter(
                        (item) => item.title.toLowerCase().includes(searchText)
                    );
                    setListSongs(searchedSongs);
                }
                else {
                    setListSongs(dataSongs);
                }
            }}/>
            {/* Song List*/}
            <FlatList
                    data={listSongs}
                    renderItem={({item})=><Card item={item}/>}
                    ItemSeparatorComponent={renderSeperator}
            />
        </View>
    );
};

export default App;
