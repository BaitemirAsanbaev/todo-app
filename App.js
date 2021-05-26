import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Control from './src/components/Contol';
import { Nav } from './src/components/Nav';

export default function App() {

  const [messages, setMessages] = useState([]);

  function addMessage(title){
    setMessages(
      prev=>[
        {
          id: Date.now().toString(),
          title
        },
        ...prev

      ])
    }

    function removeMessage(id){
      setMessages(
        prev=>prev.filter(message=>message.id !== id)
      )
    }

  return (
    <View style={styles.container}>
      <Nav/>
      <View style={styles.content}>
        <Control send={addMessage}/>
        <ScrollView>{messages.map(message => {
          return (
            <TouchableOpacity key={message}>
              <Text style={styles.li} key={message.id} onLongPress={()=>removeMessage(message.id)}>{message.title}</Text>
            </TouchableOpacity>
          )
        })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  li:{
    fontSize: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
    padding: 10,
    marginVertical: 10,
  }
});
