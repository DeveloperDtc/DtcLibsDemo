import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Import modules
import {COLORS, DEMO_BUTTONS} from '../constants';
import {useLunarDatePicker} from '../hooks';
import {DemoButton, CodeBlock} from '../components';

const LunarDatePickerDemo: React.FC = () => {
  const {
    currentConfig,
    pickDate,
    formatDateRange,
    isInitialized,
  } = useLunarDatePicker();

  const codeExample = `import { configure, pickDate, updatePrices } from '@datacomvn/lunar-date-picker';

// Cấu hình picker
configure({
  languages: {
    vi: {
      monthNames: ['Tháng 1', 'Tháng 2', ...],
      weekdayNames: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
    },
  },
  themes: {
    light: {
      backgroundColor: '#ffffff',
      selectedBackgroundColor: '#3B82F6',
      // ... other theme properties
    },
  },
});

// Hiển thị picker
pickDate({
  title: 'Chọn ngày',
  mode: 'range',
  prices: [
    { date: '2024-01-01', price: 1000000 },
    { date: '2024-01-02', price: 1200000 },
  ],
  onDone: (result) => {
    console.log('Selected:', result);
  },
});`;

  const features = [
    '• Chọn ngày đơn hoặc khoảng ngày',
    '• Hiển thị âm lịch',
    '• Hiển thị giá cho từng ngày',
    '• Lazy loading dữ liệu theo tháng',
    '• Cập nhật giá động',
    '• Hỗ trợ đa ngôn ngữ',
  ];

  if (!isInitialized) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Đang khởi tạo picker...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📅 Lunar Date Picker Demo</Text>
        <Text style={styles.description}>
          Thư viện chọn ngày âm lịch với khả năng hiển thị giá cả cho từng ngày.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Ngày đã chọn:</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{formatDateRange()}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Các loại picker:</Text>
        {DEMO_BUTTONS.map((button, index) => (
          <DemoButton
            key={index}
            title={button.title}
            description={button.description}
            color={button.color}
            onPress={() => pickDate(button.config)}
            isSelected={currentConfig === button.config}
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
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.GRAY.MEDIUM,
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
  resultContainer: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.PRIMARY,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1976d2',
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

export default LunarDatePickerDemo; 