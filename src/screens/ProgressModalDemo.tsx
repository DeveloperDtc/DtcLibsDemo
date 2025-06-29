import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

// Import modules
import {COLORS, PREDEFINED_TOASTS, DEFAULT_VALUES} from '../constants';
import {ProgressModalService} from '../services';
import {DemoButton, CodeBlock} from '../components';
import type {LoadingDemoType} from '../types';

const ProgressModalDemo: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string>(DEFAULT_VALUES.TOAST_MESSAGE);
  const [toastColor, setToastColor] = useState<string>(DEFAULT_VALUES.TOAST_COLOR);
  const [loadingTitle, setLoadingTitle] = useState<string>(DEFAULT_VALUES.LOADING_TITLE);
  const [loadingSubtitle, setLoadingSubtitle] = useState<string>(DEFAULT_VALUES.LOADING_SUBTITLE);

  const handleLoadingDemo = async (type: LoadingDemoType) => {
    await ProgressModalService.executeLoadingDemo(type, loadingTitle, loadingSubtitle);
  };

  const handleShowToast = (customColor?: string) => {
    ProgressModalService.showCustomToast(
      toastMessage,
      customColor || toastColor
    );
  };

  const handlePredefinedToast = (toastIndex: number) => {
    const toast = PREDEFINED_TOASTS[toastIndex];
    ProgressModalService.showPredefinedToast(toast);
  };

  const codeExample = `import { 
  showLoading, 
  hideLoading, 
  showToast 
} from '@datacomvn/progress-and-modal';

// Basic loading
showLoading();
setTimeout(() => hideLoading(), 2000);

// Custom loading
showLoading({
  lottie: 'loading',
  title: 'Loading...',
  subtitle: 'Please wait...'
});

// Lottie animations
hideLoading({
  lottie: 'done',
  title: 'Success!',
  subtitle: 'Completed!'
});

// Toast
showToast({
  message: 'Hello World!',
  backgroundColor: '#4CAF50',
  textColor: '#FFFFFF'
});`;

  const loadingDemos = [
    {
      title: 'Basic Loading',
      description: 'Hiển thị loading cơ bản trong 2 giây',
      color: COLORS.PRIMARY,
      type: 'basic' as LoadingDemoType,
    },
    {
      title: 'Custom Loading',
      description: 'Loading với title và subtitle tùy chỉnh',
      color: COLORS.WARNING,
      type: 'custom' as LoadingDemoType,
    },
    {
      title: 'Lottie Success',
      description: 'Loading → Success với Lottie animation',
      color: COLORS.SUCCESS,
      type: 'lottie-success' as LoadingDemoType,
    },
    {
      title: 'Lottie Failed',
      description: 'Loading → Failed với Lottie animation',
      color: COLORS.ERROR,
      type: 'lottie-failed' as LoadingDemoType,
    },
  ];

  const features = [
    '• Loading spinner cơ bản',
    '• Loading với title/subtitle tùy chỉnh',
    '• Lottie animations (loading, success, failed)',
    '• Toast messages với màu sắc tùy chỉnh',
    '• Auto-hide hoặc manual hide',
    '• Overlay blocking user interaction',
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏳ Progress & Modal Demo</Text>
        <Text style={styles.description}>
          Thư viện hiển thị loading, toast và các modal tương tác với người dùng.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Loading Demos:</Text>
        
        {loadingDemos.map((demo, index) => (
          <DemoButton
            key={index}
            title={demo.title}
            description={demo.description}
            color={demo.color}
            onPress={() => handleLoadingDemo(demo.type)}
          />
        ))}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Custom Loading Parameters:</Text>
          <TextInput
            style={styles.textInput}
            value={loadingTitle}
            onChangeText={setLoadingTitle}
            placeholder="Loading title"
            placeholderTextColor={COLORS.GRAY.MEDIUM}
          />
          <TextInput
            style={styles.textInput}
            value={loadingSubtitle}
            onChangeText={setLoadingSubtitle}
            placeholder="Loading subtitle"
            placeholderTextColor={COLORS.GRAY.MEDIUM}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Toast Demos:</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Custom Toast:</Text>
          <TextInput
            style={styles.textInput}
            value={toastMessage}
            onChangeText={setToastMessage}
            placeholder="Toast message"
            placeholderTextColor={COLORS.GRAY.MEDIUM}
          />
          <TextInput
            style={styles.textInput}
            value={toastColor}
            onChangeText={setToastColor}
            placeholder="Background color (hex)"
            placeholderTextColor={COLORS.GRAY.MEDIUM}
          />
          <DemoButton
            title="Custom Toast"
            description="Toast với message và màu tùy chỉnh"
            color={COLORS.PURPLE}
            onPress={() => handleShowToast()}
          />
        </View>

        <Text style={styles.inputLabel}>Predefined Toasts:</Text>
        {PREDEFINED_TOASTS.map((toast, index) => (
          <DemoButton
            key={index}
            title={`${toast.icon} ${toast.title}`}
            description={toast.message}
            color={toast.color}
            onPress={() => handlePredefinedToast(index)}
          />
        ))}
      </View>

      <View style={styles.section}>
        <CodeBlock title="Cách sử dụng:" code={codeExample} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Tính năng chính:</Text>
        <View style={styles.featureList}>
          {features.map((feature, index) => (
            <Text key={index} style={styles.featureItem}>{feature}</Text>
          ))}
        </View>
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
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.GRAY.DARK,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  featureList: {
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.SUCCESS,
  },
  featureItem: {
    fontSize: 14,
    color: COLORS.GRAY.DARK,
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default ProgressModalDemo; 