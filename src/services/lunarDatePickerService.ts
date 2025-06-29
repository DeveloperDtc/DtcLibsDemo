import {
  configure,
  pickDate,
  updatePrices,
} from '@datacomvn/lunar-date-picker';
import { LUNAR_PICKER_CONFIG } from '../constants';
import { generateSamplePrices, generatePricesForMonth, delay } from '../utils';
import type { DateRange, PriceConfig } from '../types';

export class LunarDatePickerService {
  /**
   * Khởi tạo cấu hình picker
   */
  static initializePicker() {
    configure(LUNAR_PICKER_CONFIG);
  }

  /**
   * Tạo cấu hình picker cơ bản
   */
  static createBaseConfig(
    selectedRange?: DateRange,
    onDone?: (result: any) => void
  ) {
    const today = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);

    const formatDate = (date: Date) => {
      return date.toISOString().split('T')[0];
    };

    return {
      theme: 'light' as const,
      language: 'vi' as const,
      title: 'Chọn ngày',
      textCancel: 'Hủy',
      mode: 'range' as const,
      minimumDate: formatDate(today),
      maximumDate: formatDate(nextYear),
      initialValue: selectedRange
        ? {
            from: selectedRange.from.toISOString().split('T')[0],
            to: selectedRange.to?.toISOString().split('T')[0],
          }
        : undefined,
      onDone: onDone || (() => {}),
    };
  }

  /**
   * Hiển thị picker theo loại cấu hình
   */
  static showPicker(
    configType: PriceConfig,
    selectedRange?: DateRange,
    onDone?: (result: any) => void
  ) {
    const baseConfig = this.createBaseConfig(selectedRange, onDone);
    let config;

    switch (configType) {
      case 'none':
        config = baseConfig;
        break;
      case 'empty':
        config = { ...baseConfig, prices: [] };
        break;
      case 'with-data':
        config = { ...baseConfig, prices: generateSamplePrices() };
        break;
      case 'lazy-loading':
        config = {
          ...baseConfig,
          prices: [],
          onMonthVisible: this.handleMonthVisible,
        };
        break;
    }

    // @ts-ignore
    pickDate(config);
  }

  /**
   * Xử lý khi tháng hiển thị (lazy loading)
   */
  static async handleMonthVisible(month: string) {
    console.log(`Month became visible: ${month}`);
    
    // Simulate loading delay
    await delay(500);
    
    try {
      // Parse month string format "YYYY-MM" to get year and month
      const [year, monthNum] = month.split('-').map(Number);
      
      if (!year || !monthNum) {
        console.warn(`Invalid month format: ${month}`);
        return;
      }
      
      // Generate prices specifically for this month
      const prices = generatePricesForMonth(year, monthNum);
      
      console.log(`Generated ${prices.length} prices for ${month}:`, prices.slice(0, 3));
      
      updatePrices({
        mode: 'merge',
        monthData: { month, prices },
      });
      
      console.log(`Successfully loaded prices for month: ${month}`);
    } catch (error) {
      console.error(`Failed to load prices for month ${month}:`, error);
    }
  }

  /**
   * Format khoảng ngày để hiển thị
   */
  static formatDateRange(range?: DateRange): string {
    if (!range) return 'Chưa chọn ngày';
    
    const fromDate = range.from.toLocaleDateString('vi-VN');
    const toDate = range.to?.toLocaleDateString('vi-VN') || fromDate;
    
    return `${fromDate} → ${toDate}`;
  }

  /**
   * Tạo DateRange từ kết quả picker
   */
  static createDateRangeFromResult(result: any): DateRange {
    return {
      from: new Date(result.from),
      to: result.to ? new Date(result.to) : undefined,
    };
  }

  /**
   * Kiểm tra xem khoảng ngày có hợp lệ không
   */
  static isValidDateRange(range?: DateRange): boolean {
    if (!range) return false;
    
    if (range.to) {
      return range.from <= range.to;
    }
    
    return true;
  }
} 