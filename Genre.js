// GenreSelection.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const GenreSelection = () => {
  const [selectedGenre, setSelectedGenre] = useState('Select a Genre');
  const genres = ['Fiction', 'Non-fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Romance', 'Biography'];

  const handleGenreChange = (itemValue) => {
    setSelectedGenre(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Book Genre:</Text>
      <Picker
        selectedValue={selectedGenre}
        style={styles.picker}
        onValueChange={handleGenreChange}
      >
        <Picker.Item label="Select a Genre" value="Select a Genre" />
        {genres.map((genre, index) => (
          <Picker.Item key={index} label={genre} value={genre} />
        ))}
      </Picker>
      <Text style={styles.selectedGenre}>Selected Genre: {selectedGenre}</Text>
      <TextInput
        placeholder="Genre name"
        onChangeText={text => setGenre(text)}
        value={Genre}
        style={styles.input}
      />
      <TextInput
        placeholder="Number of Books"
        onChangeText={text => setNoBooks(text)}
        value={NoBooks}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  picker: {
    width: 200,
    height: 50,
  },
  selectedGenre: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default GenreSelection;
