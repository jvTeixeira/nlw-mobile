import { ImageBackground } from 'react-native';

import { styles } from './style';

interface Props {
  children?: React.ReactNode;
}

type ImageBackground = 

export function Background({children}: Props) {
  return (
    <ImageBackground style={styles.container}>

    </ImageBackground>
  );
}