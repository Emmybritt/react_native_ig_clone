import { View, Text, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import { Divider } from '@rneui/themed'
import styles from './styles'

const PostHeader = ({post}) => (
  <View style={styles.container}>
    <View style={styles.PostHeaderComponent}>
      <Image style={styles.image} source={post.imageUrl} />
      <Text style={styles.text}>{post.user}</Text>
    </View>
    <View>
      <Text style={styles.elipses}>...</Text>
    </View>
  </View>
)

const PostImage = ({post}) => {
  return (
    <Image style={styles.postImage} source={post.imageUrl} />
    // <Text>nice</Text>
  )
}



const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation='vertical' />
      <PostHeader  post={post}/>
      <PostImage post={post} />
    </View>
  )
}

export default Post