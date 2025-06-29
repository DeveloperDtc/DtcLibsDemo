import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

// Import modules
import {COLORS, SAMPLE_FILE_PATHS, DEFAULT_VALUES} from '../constants';
import {useFileOpener} from '../hooks';
import {CodeBlock} from '../components';

const FileOpenerDemo: React.FC = () => {
  const [filePath, setFilePath] = useState('');
  const {lastOpenedFile, isLoading, validateAndOpenFile} = useFileOpener();

  const handleCustomPath = async () => {
    await validateAndOpenFile(filePath.trim());
  };

  const handleSamplePath = async (samplePath: { displayName: string; path: string }) => {
    await validateAndOpenFile(samplePath.path);
  };

  const codeExample = `import { FileOpener } from '@datacomvn/file-opener';

const openFile = async (path: string) => {
  const canOpen = await FileOpener.open(path);
  
  if (canOpen) {
    console.log('File opened successfully');
  } else {
    console.log('Cannot open file');
  }
};`;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📁 File Opener Demo</Text>
        <Text style={styles.description}>
          Thư viện này cho phép mở file từ đường dẫn trên thiết bị bằng ứng dụng mặc định.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Nhập đường dẫn file:</Text>
        <TextInput
          style={styles.textInput}
          value={filePath}
          onChangeText={setFilePath}
          placeholder={DEFAULT_VALUES.FILE_PATH_PLACEHOLDER}
          placeholderTextColor={COLORS.GRAY.MEDIUM}
          multiline
          editable={!isLoading}
        />
        <TouchableOpacity
          style={[styles.primaryButton, isLoading && styles.disabledButton]}
          onPress={handleCustomPath}
          disabled={isLoading}>
          <Text style={styles.primaryButtonText}>
            {isLoading ? 'Đang mở...' : 'Mở File'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Hoặc thử với các đường dẫn mẫu:</Text>
        <Text style={styles.note}>
          (Lưu ý: Các đường dẫn này chỉ để demo, có thể file không tồn tại)
        </Text>
        {SAMPLE_FILE_PATHS.map((samplePath, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.sampleButton, isLoading && styles.disabledButton]}
            onPress={() => handleSamplePath(samplePath)}
            disabled={isLoading}>
            <Text style={styles.sampleButtonText}>{samplePath.displayName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {lastOpenedFile ? (
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>File đã mở gần nhất:</Text>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{lastOpenedFile}</Text>
          </View>
        </View>
      ) : null}

      <View style={styles.section}>
        <CodeBlock title="Cách sử dụng:" code={codeExample} />
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
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.GRAY.DARK,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.GRAY.DARK,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: COLORS.GRAY.MEDIUM,
    lineHeight: 24,
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  primaryButton: {
    backgroundColor: COLORS.WARNING,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  sampleButton: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sampleButtonText: {
    color: COLORS.GRAY.DARK,
    fontSize: 14,
    fontFamily: 'monospace',
  },
  disabledButton: {
    opacity: 0.6,
  },
  resultContainer: {
    backgroundColor: '#e8f5e8',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.SUCCESS,
  },
  resultText: {
    color: '#2e7d32',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});

export default FileOpenerDemo; 