import React, {useRef} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import CharacterCard from '../../components/CharacterCard';
import EmptyPlaceholder from '../../components/EmptyContainer';
import {RootState} from '../../store/store';
import {ScreenProps} from '../../typings/navigation';
import {useScrollToTop} from '@react-navigation/native';
import {styles} from '../../styles/commonStyle';

const Favourites: ScreenProps<'Favourites'> = () => {
  const characters = useSelector((state: RootState) => state.favourite);

  const flatlistRef = useRef<FlatList>(null);
  useScrollToTop(flatlistRef);

  return (
    <FlatList
      ref={flatlistRef}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={<EmptyPlaceholder />}
      data={Object.values(characters)}
      renderItem={({item}) => <CharacterCard item={item} />}
    />
  );
};

export default Favourites;
