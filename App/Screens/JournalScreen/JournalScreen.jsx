import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const JournalScreen = () => {
  return (
    <View style={styles.container}>
      <Text>JournalScreen</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        />
    </View>
  )
}

export default JournalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

