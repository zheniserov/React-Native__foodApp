import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons name="ios-search" style={styles.iconStyle} />
            <TextInput 
                placeholder="Search"
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#e3e1e1',
        height:50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 15
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;