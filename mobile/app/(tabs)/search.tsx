import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

const TRENDING_TOPICS = [
  { topic: "ReactNative", tweets: "120K" },
  { topic: "JavaScript", tweets: "95K" },
  { topic: "TypeScript", tweets: "80K" },
  { topic: "Expo", tweets: "60K" },
  { topic: "MobileDevelopment", tweets: "45K" },
  { topic: "ReactNavigation", tweets: "30K" },
  { topic: "GraphQL", tweets: "25K" },
  { topic: "TailwindCSS", tweets: "20K" },
  { topic: "NextJS", tweets: "15K" },
  { topic: "Jest", tweets: "10K" },
  
]

const SearchScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='px-4 py-3 border-b border-gray-100'>
        <View className='flex-row items-center bg-gray-100 rounded-full px-4 py-3'>
          <Feather name='search' size={20} color='#657786' />
          <TextInput
            placeholder='Search Twitter'
            className='ml-3 flex-1 text-base'
            placeholderTextColor="#657786"
          />
        </View>
      </View>
      <ScrollView className='flex-1'>
        <View className='p-4'>
          <Text className='text-xl font-bold text-gray-900 mb-4'>
            Trending for you
          </Text>
          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity
              key={index}
              className='py-3 border-b border-gray-100'>
                <Text className='text-sm text-gray-500'>Trending in Technology</Text>
                <Text className='text-lg font-bold text-gray-900'>{item.topic}</Text>
                <Text className='text-sm text-gray-500'>{item.tweets} Tweets</Text>
            </TouchableOpacity>
          ))}

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen