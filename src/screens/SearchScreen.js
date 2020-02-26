import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResulsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermSubmit={() => searchApi(term)}
                onTermChange={setTerm}
            />
            {errorMessage ? <Text>{errorMessage} </Text> : null}
            <ScrollView>
                <ResulsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResulsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResulsList
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;