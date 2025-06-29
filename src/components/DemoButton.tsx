import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface DemoButtonProps {
  title: string;
  description?: string;
  color: string;
  onPress: () => void;
  isSelected?: boolean;
  children?: React.ReactNode;
}

export const DemoButton: React.FC<DemoButtonProps> = ({
  title,
  description,
  color,
  onPress,
  isSelected = false,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.demoButton, { borderLeftColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonTitle}>{title}</Text>
        {description && (
          <Text style={styles.buttonDescription}>{description}</Text>
        )}
        {children}
      </View>
      {isSelected && (
        <View style={[styles.statusIndicator, { backgroundColor: color }]}>
          <Text style={styles.statusText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  demoButton: {
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContent: {
    flex: 1,
    padding: 20,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  buttonDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  statusIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 