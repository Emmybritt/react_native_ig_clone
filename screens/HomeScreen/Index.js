import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/Header/Index'
import Stories from '../../components/Stories/Index'
import Post from '../../components/Post/Index'
import { POSTS } from '../../data/posts'
import { SafeAreaView } from 'react-native'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
        
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default HomeScreen