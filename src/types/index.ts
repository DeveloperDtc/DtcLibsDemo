// Navigation types
export type RootStackParamList = {
  Home: undefined;
  FileOpenerDemo: undefined;
  LunarDatePickerDemo: undefined;
  ProgressModalDemo: undefined;
};

// Common types
export type DemoItem = {
  title: string;
  description: string;
  icon: string;
  color: string;
  onPress: () => void;
};

// File Opener types
export type SamplePath = {
  displayName: string;
  path: string;
};

// Lunar Date Picker types
export type DateRange = {
  from: Date;
  to?: Date;
};

export type PriceConfig = 'none' | 'empty' | 'with-data' | 'lazy-loading';

export type PriceData = {
  date: string;
  price: number;
  isCheapest?: boolean;
};

export type PickerDemoButton = {
  title: string;
  description: string;
  color: string;
  config: PriceConfig;
};

// Progress & Modal types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type PredefinedToast = {
  title: string;
  message: string;
  color: string;
  icon: string;
};

export type LoadingDemoType = 'basic' | 'custom' | 'lottie-success' | 'lottie-failed';

// Style types
export type DemoCardStyle = {
  borderLeftColor: string;
};

export type ButtonStyle = {
  backgroundColor?: string;
  borderColor?: string;
}; 