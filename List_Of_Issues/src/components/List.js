import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { issues } from './issues';

const issuesArr = issues;

const List = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Open issues</Text>
      {issuesArr
        .filter((issue) => issue.status === 'Open')
        .map((element, idx) => {
          const cardStyle = [
            styles.issueBox,
            idx === 0 ? styles.issueBoxFirst : styles.issueBoxDefault
          ];
          return (
            <View key={element.id} style={cardStyle}>
              <Text style={styles.issueId}>ID: {element.id}</Text>
              <Text style={styles.issueLabel}><Text style={styles.bold}>Omschrijving:</Text> {element.description}</Text>
              <Text style={styles.issueLabel}><Text style={styles.bold}>Toegewezen aan:</Text> {element.assigned}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    alignSelf: 'center',
    color: '#222',
  },
  issueBox: {
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  issueBoxFirst: {
    backgroundColor: '#ffeaea',
  },
  issueBoxDefault: {
    backgroundColor: '#e6e6fa',
  },
  issueId: {
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#7a7a7a',
  },
  issueLabel: {
    marginBottom: 2,
    color: '#222',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default List;