import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Import modules
import type {RootStackParamList, DemoItem} from '../types';
import {APP_CONFIG, DEMO_ITEMS, COLORS} from '../constants';
import {DemoCard} from '../components';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Tạo demo items với navigation
  const demoItems: DemoItem[] = DEMO_ITEMS.map(item => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
    color: item.color,
    onPress: () => navigation.navigate(item.route),
  }));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{APP_CONFIG.NAME}</Text>
        <Text style={styles.subtitle}>
          {APP_CONFIG.DESCRIPTION}
        </Text>
      </View>

      <View style={styles.cardContainer}>
        {demoItems.map((item, index) => (
          <DemoCard key={index} item={item} index={index} />
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 DatacomVN - React Native Libraries
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.GRAY.DARK,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.GRAY.MEDIUM,
    textAlign: 'center',
    lineHeight: 22,
  },
  cardContainer: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});

export default HomeScreen; 