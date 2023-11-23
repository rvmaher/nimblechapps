import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type BottomTabScreenParams = {
  Home: undefined;
  Favourites: undefined;
};

export type ScreenProps<K extends keyof BottomTabScreenParams> = React.FC<
  BottomTabScreenProps<BottomTabScreenParams, K>
>;
