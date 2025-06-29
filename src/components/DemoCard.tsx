import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type { DemoItem } from '../types';

interface DemoCardProps {
  item: DemoItem;
  index: number;
}

export const DemoCard: React.FC<DemoCardProps> = ({ item, index }) => {
  return (
    <TouchableOpacity
      key={index}
      style={[styles.card, { borderLeftColor: item.color }]}
      onPress={item.onPress}
      activeOpacity={0.7}>
      <View style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  arrowContainer: {
    width: 30,
    alignItems: 'center',
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
}); 