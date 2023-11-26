// HistoryPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HistoryPage = () => {
  // Sample data for the last three books read
  const [historyData, setHistoryData] = useState([
    { id: '1', title: 'Book 1', author: 'Author 1' },
    { id: '2', title: 'Book 2', author: 'Author 2' },
    { id: '3', title: 'Book 3', author: 'Author 3' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reading History</Text>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>by {item.author}</Text>
            <Button title="Back to Homepage" onPress={handleHomepage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: 'gray',
  },
});

export default HistoryPage;
