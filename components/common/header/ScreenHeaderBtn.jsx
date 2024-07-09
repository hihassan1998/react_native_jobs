import React from 'react'
import { TouchableOpacity, Image, Dimensions, Pressable } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  // console.log('iconUrl:', iconUrl);
  // console.log('dimension:', dimension);
  
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};
export default ScreenHeaderBtn