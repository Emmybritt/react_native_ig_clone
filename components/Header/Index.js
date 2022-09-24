import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/header-logo.png')} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image style={styles.icon}  source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon}  source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unredBadge}>
            <Text style={styles.unredBadgeText}>11</Text>
          </View>
          <Image style={styles.icon}  source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header