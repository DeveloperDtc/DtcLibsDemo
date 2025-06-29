import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface CodeBlockProps {
  code: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  title 
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{code}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  codeContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
  },
}); 