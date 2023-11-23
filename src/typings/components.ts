import {Character} from './character';

type CharacterCardProps = {
  item: Character;
};

type PaginationProps = {
  currPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pagesPerBatch?: number;
};

type CharacterModalProps = {
  item: Character;
  isVisible: boolean;
  onClose: () => void;
};

type CapsuleButtonProps = {
  onPress: () => void;
  text: string;
  bgColor?: string;
};

export type {
  CharacterCardProps,
  PaginationProps,
  CharacterModalProps,
  CapsuleButtonProps,
};
