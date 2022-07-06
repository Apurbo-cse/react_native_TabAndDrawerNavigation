/* eslint-disable prettier/prettier */
//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../Constants/imagePath';
import MainNavigationString from '../../Constants/MainNavigationString';

// create a component
const Showcase = () => {

  const Navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.superStarHome}>
        <TouchableOpacity
          // onPress={() => Navigation.navigate(navigationStrings.AUCTION)}
          style={styles.singleContent}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Auction</Text>
          </LinearGradient>
          <Image source={imagePath.Auction} style={styles.postImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleContent}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>MarketPlace</Text>
          </LinearGradient>
          <Image source={imagePath.MarketPlace} style={styles.postImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.superStarHome}>
        <TouchableOpacity style={styles.singleContent}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Pending Request</Text>
          </LinearGradient>
          <Image source={imagePath.Pending} style={styles.postImage} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#000',
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#232323',
    borderRadius: 10,
    paddingBottom: 8,
  },
  superStarHome: {
    flexDirection: 'row',
    padding: 5,
  },
  postImage: {
    width: 65,
    height: 65,
    margin: '15%',
  },
  linearGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  singleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    width: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    left: '85%',
    top: '5%',
  },
});

//make this component available to the app
export default Showcase;
