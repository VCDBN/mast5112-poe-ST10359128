// HomePage.js
import React from 'react';
import { View, Text, StyleSheet , Button } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomePage</Text>
      <TextInput
        placeholder="Enter Title:"
        onChangeText={text => setTitle(text)}
        value={Title}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Authors Name"
        onChangeText={text => setAuthor(text)}
        value={Author}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Genre"
        onChangeText={text => setGenre(text)}
        value={Genre}
        style={styles.input}
      />
      <TextInput
        placeholder="Number of Pages"
        onChangeText={text => setPages(text)}
        value={Pages}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Book Read"
        onChangeText={text => setLastbook(text)}
        value={Lastbook}
        style={styles.input}
      />
      <TextInput
        placeholder="Total Number of Pages Read"
        onChangeText={text => setTotal(text)}
        value={Total}
        style={styles.input}
      />
      <TextInput
        placeholder="Average Number of Pages Read"
        onChangeText={text => setAverage(text)}
        value={Average}
        style={styles.input}
      />
       <Button title="Next Page" onPress={handleNextPage} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomePage;
