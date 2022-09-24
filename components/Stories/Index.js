import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import styles from './styles'


const Stories = () => {
  
  return (
    <View style={{marginBottom:13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image style={styles.image} source={story.image} />
            <Text style={styles.textColor}>{story.user.length > 8 ? story.user.slice(0,9).toLowerCase() + '...' : story.user.toLocaleLowerCase()}</Text>
          </View>
          
        ))}
      {/* <Text style={{color: "white"}}>Stories</Text> */}
      </ScrollView>
    </View>
  )
}

export default Stories