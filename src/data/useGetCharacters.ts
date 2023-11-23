import {useState} from 'react';
import baseAxios from '../config/axios';
import {Character, RootResponse} from '../typings/character';
import {Alert} from 'react-native';

export function useGetCharacters() {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>();

  const getCharacters = (pageNo: number) => {
    setIsLoading(true);
    baseAxios
      .get<RootResponse>(`character/?page=${pageNo}`)
      .then(res => {
        setTotalPages(res.data.info.pages);
        setCharacters(res.data.results);
      })
      .catch(() => {
        Alert.alert(
          'Oops! something went wrong when getting the data.Please try again after sometime',
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    characters,
    getCharacters,
    totalPages,
  };
}
