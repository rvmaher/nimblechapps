import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {usePagination} from '../../hooks/usePagination';
import {paginationStyles as styles} from '../../styles/paginationStyle';
import {PaginationProps} from '../../typings/components';

const Pagination: React.FC<PaginationProps> = ({
  currPage,
  totalPages,
  onPageChange,
  pagesPerBatch = 3,
}) => {
  const getPageNumbers = usePagination({
    currPage,
    totalPages,
    pagesPerBatch,
  });

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, currPage === 1 && styles.disabledButton]}
        onPress={() => handlePageChange(1)}
        disabled={currPage === 1}>
        <Text style={styles.buttonText}>{'<<'}</Text>
      </Pressable>
      <Pressable
        style={[styles.button, currPage === 1 && styles.disabledButton]}
        onPress={() => handlePageChange(currPage - 1)}
        disabled={currPage === 1}>
        <Text style={styles.buttonText}>{'<'}</Text>
      </Pressable>
      {getPageNumbers.map(pageNum => (
        <Pressable
          disabled={currPage === pageNum}
          key={pageNum}
          style={styles.button}
          onPress={() => handlePageChange(pageNum)}>
          <Text
            style={[
              styles.buttonText,
              currPage === pageNum && styles.activeButtonText,
            ]}>
            {pageNum}
          </Text>
        </Pressable>
      ))}
      <Pressable
        style={[
          styles.button,
          currPage === totalPages && styles.disabledButton,
        ]}
        onPress={() => handlePageChange(currPage + 1)}
        disabled={currPage === totalPages}>
        <Text style={styles.buttonText}>{'>'}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          currPage === totalPages && styles.disabledButton,
        ]}
        onPress={() => handlePageChange(totalPages)}
        disabled={currPage === totalPages}>
        <Text style={styles.buttonText}>{'>>'}</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Pagination);
