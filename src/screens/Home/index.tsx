import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import Pagination from '../../components/Pagination';
import {useGetCharacters} from '../../data/useGetCharacters';
import {useScrollToTop} from '@react-navigation/native';
import {ScreenProps} from '../../typings/navigation';
import {styles} from '../../styles/commonStyle';

const Home: ScreenProps<'Home'> = () => {
  const {getCharacters, characters, isLoading, totalPages} = useGetCharacters();

  const [currPage, setCurrPage] = useState(1);

  const flatlistRef = useRef<FlatList>(null);

  const handlePageChange = (pageNo: number) => {
    setCurrPage(pageNo);
    getCharacters(pageNo);
    flatlistRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  useScrollToTop(flatlistRef);

  useEffect(() => {
    getCharacters(currPage);
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        isLoading ? <Text style={styles.btnText}>Loading data...</Text> : null
      }
      ref={flatlistRef}
      data={characters}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}) => <CharacterCard item={item} />}
      ListFooterComponent={
        !isLoading ? (
          <Pagination
            currPage={currPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        ) : (
          <></>
        )
      }
    />
  );
};

export default Home;
