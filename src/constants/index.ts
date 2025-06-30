import type { PredefinedToast, SamplePath } from '../types';

// App config
export const APP_CONFIG = {
  NAME: 'DatacomVN Libraries Demo',
  VERSION: '1.0.0',
  DESCRIPTION: 'Demo các thư viện React Native của DatacomVN',
} as const;

// Colors
export const COLORS = {
  PRIMARY: '#2196F3',
  SECONDARY: '#FF9800',
  SUCCESS: '#4CAF50',
  ERROR: '#F44336',
  WARNING: '#FF9800',
  INFO: '#2196F3',
  PURPLE: '#9C27B0',
  BACKGROUND: '#f5f5f5',
  WHITE: '#ffffff',
  BLACK: '#000000',
  GRAY: {
    LIGHT: '#f8f9fa',
    MEDIUM: '#666',
    DARK: '#333',
  },
} as const;

// Demo items config
export const DEMO_ITEMS = [
  {
    title: 'File Opener',
    description: 'Demo thư viện mở file từ đường dẫn',
    icon: '📁',
    color: COLORS.WARNING,
    route: 'FileOpenerDemo' as const,
  },
  {
    title: 'Lunar Date Picker',
    description: 'Demo thư viện chọn ngày âm lịch với giá cả',
    icon: '📅',
    color: COLORS.PRIMARY,
    route: 'LunarDatePickerDemo' as const,
  },
  {
    title: 'Progress & Modal',
    description: 'Demo thư viện hiển thị loading, toast, modal',
    icon: '⏳',
    color: COLORS.SUCCESS,
    route: 'ProgressModalDemo' as const,
  },
] as const;

// File Opener constants
export const SAMPLE_FILE_PATHS: SamplePath[] = [
  {
    displayName: 'demo-0104F0D5-513C-4FC3-82A5-A07C02205E3D.jpg',
    path: '/Users/datacom/Library/Developer/CoreSimulator/Devices/B06D51D2-B50F-4BDE-A0EF-F606E2A7E26A/data/tmp/drag-F43B4D74-729E-4CB2-9F08-3D01D290B92C/demo-0104F0D5-513C-4FC3-82A5-A07C02205E3D.jpg',
  },
  {
    displayName: 'document.pdf',
    path: '/path/to/document.pdf',
  },
  {
    displayName: 'image.jpg',
    path: '/path/to/image.jpg',
  },
  {
    displayName: 'video.mp4',
    path: '/path/to/video.mp4',
  },
  {
    displayName: 'presentation.pptx',
    path: '/path/to/presentation.pptx',
  },
  {
    displayName: 'spreadsheet.xlsx',
    path: '/path/to/spreadsheet.xlsx',
  },
];

// Lunar Date Picker constants
export const LUNAR_PICKER_CONFIG = {
  languages: {
    vi: {
      monthNames: [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
      ],
      weekdayNames: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
    },
  },
  themes: {
    light: {
      backgroundColor: '#ffffff',
      cancelColor: '#2563EB',
      titleColor: '#000000',
      dateLabelColor: '#030712',
      lunarDateLabelColor: '#6B7280',
      weekendLabelColor: '#E27B00',
      rangeBackgroundColor: '#EFF6FF',
      monthLabelColor: '#030712',
      selectedTextColor: '#FFFFFF',
      specialDayLabelColor: '#ff3300',
      weekViewBackgroundColor: '#F3F4F6',
      selectedBackgroundColor: '#3B82F6',
      cheapestPriceLabelColor: '#00b300',
      priceLabelColor: '#ff9933',
    },
  },
  yearRangeOffset: 2,
  timeZoneOffset: 7,
};

export const DEMO_BUTTONS = [
  {
    title: 'Picker cơ bản',
    description: 'Chỉ có chức năng chọn ngày, không có giá',
    color: COLORS.PRIMARY,
    config: 'none' as const,
  },
  {
    title: 'Picker với giá trống',
    description: 'Hiển thị picker với danh sách giá trống',
    color: COLORS.WARNING,
    config: 'empty' as const,
  },
  {
    title: 'Picker với dữ liệu giá',
    description: 'Hiển thị picker với giá đã có sẵn',
    color: COLORS.SUCCESS,
    config: 'with-data' as const,
  },
  {
    title: 'Lazy Loading',
    description: 'Tải giá theo từng tháng khi cần thiết',
    color: COLORS.PURPLE,
    config: 'lazy-loading' as const,
  },
] as const;

// Progress & Modal constants
export const PREDEFINED_TOASTS: PredefinedToast[] = [
  {
    title: 'Success Toast',
    message: 'Operation completed successfully!',
    color: COLORS.SUCCESS,
    icon: '✅',
  },
  {
    title: 'Error Toast',
    message: 'Something went wrong. Please try again.',
    color: COLORS.ERROR,
    icon: '❌',
  },
  {
    title: 'Warning Toast',
    message: 'Please check your input data.',
    color: COLORS.WARNING,
    icon: '⚠️',
  },
  {
    title: 'Info Toast',
    message: 'New update available for download.',
    color: COLORS.INFO,
    icon: 'ℹ️',
  },
];

// Default values
export const DEFAULT_VALUES = {
  TOAST_MESSAGE: 'Hello from DatacomVN!' as string,
  TOAST_COLOR: '#FF00003B' as string,
  LOADING_TITLE: 'Loading...' as string,
  LOADING_SUBTITLE: 'Please wait...' as string,
  FILE_PATH_PLACEHOLDER:
    'Ví dụ: /storage/emulated/0/Download/file.pdf' as string,
};

// Price generation config
export const PRICE_CONFIG = {
  MIN_PRICE: 500000, // 500k VND
  MAX_PRICE: 1500000, // 1.5M VND
  SAMPLE_DAYS: 30,
} as const;
