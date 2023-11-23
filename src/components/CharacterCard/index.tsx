import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourite, removeFromFavourite} from '../../store/features/favouriteSlice';
import {RootState} from '../../store/store';
import {CharacterCardProps} from '../../typings/components';
import CharacterModal from '../CharacterModal';
import {Colors} from '../../constants/Colors';
import CapsuleButton from '../CapsuleButton';
import {characterCardstyles as styles} from '../../styles/characterCardStyles';

const CharacterCard: React.FC<CharacterCardProps> = React.memo(({item}) => {
  const favourites = useSelector((state: RootState) => state.favourite);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const isFavourite = React.useMemo(() => {
    return item?.id in favourites;
  }, [favourites]);

  const toggleFavourite = () => {
    if (!isFavourite) {
      dispatch(addToFavourite(item));
    } else {
      dispatch(removeFromFavourite(item.id));
    }
  };

  return (
    <View style={styles.card}>
      <Image
        resizeMode={'stretch'}
        source={{uri: item.image}}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={toggleFavourite}
        style={styles.favouriteButton}>
        <Image
          tintColor={isFavourite ? Colors.Red : Colors.White}
          source={require('../../assets/heart.png')}
          style={styles.favouriteImage}
        />
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.metaInfo}>Status: {item.status || 'N/A'}</Text>
        <Text style={styles.metaInfo}>Origin: {item.origin.name || 'N/A'}</Text>
        <Text style={styles.metaInfo}>Gender: {item.gender}</Text>
        <Text style={styles.metaInfo}>Type: {item.type || 'N/A'}</Text>
        <Text style={styles.metaInfo}>
          Location: {item.location.name || 'N/A'}
        </Text>
      </View>
      <CapsuleButton
        text="More Details"
        onPress={() => setIsModalVisible(true)}
      />
      {isModalVisible && (
        <CharacterModal
          isVisible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
          item={item}
        />
      )}
    </View>
  );
});

export default CharacterCard;
