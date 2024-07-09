import React from 'react'
import { useState } from 'react'
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import styles from './popularjobs.style';
import { Touchable } from 'react-native';
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular jobs </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5,6,7,8]}
            renderItem={({item}) => (
              <PopularJobCard
              item= {item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle= {{columnGap: SIZES.medium}}
            horizontal
          />
        )}

      </View>
    </View>
  )
}

export default Popularjobs