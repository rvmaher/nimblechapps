import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {characterModalstyles as styles} from '../../styles/characterModalStyle';
import {CharacterModalProps} from '../../typings/components';
import {getEpisode} from '../../utils/beutifiers';
import CapsuleButton from '../CapsuleButton';
import {Colors} from '../../constants/Colors';

const CharacterModal: React.FC<CharacterModalProps> = ({
  item,
  isVisible,
  onClose,
}) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = item;

  const episodes = episode.reduce((prev, curr) => {
    prev += getEpisode(curr);
    return prev;
  }, '');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{uri: image}} style={styles.modalImage} />
          <Text style={styles.modalName}>{name}</Text>
          <Text style={styles.metaText}>Status: {status || 'N/A'}</Text>
          <Text style={styles.metaText}>Species: {species || 'N/A'}</Text>
          <Text style={styles.metaText}>Type: {type || 'N/A'}</Text>
          <Text style={styles.metaText}>Gender: {gender || 'N/A'}</Text>
          <Text style={styles.metaText}>Origin: {origin.name || 'N/A'}</Text>
          <Text style={styles.metaText}>
            Location: {location.name || 'N/A'}
          </Text>
          <Text style={styles.metaText}>Appeared in Episode: {episodes}</Text>
          <CapsuleButton onPress={onClose} text="Close" bgColor={Colors.Red} />
        </View>
      </View>
    </Modal>
  );
};

export default CharacterModal;
