import dayjs from 'dayjs';
import { PRICE_CONFIG } from '../constants';
import type { PriceData } from '../types';

// Date utilities
export const formatDateToString = (date: Date): string => {
  return date.toISOString().split('T')[0] || '';
};

export const formatDateToLocalString = (date: Date): string => {
  return date.toLocaleDateString('vi-VN');
};

export const createDateFromDaysOffset = (daysOffset: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date;
};

export const createDateRange = (today: Date) => {
  const nextYear = new Date();
  nextYear.setFullYear(today.getFullYear() + 1);
  return { today, nextYear };
};

// Price utilities
export const generateRandomPrice = (): number => {
  return Math.floor(Math.random() * (PRICE_CONFIG.MAX_PRICE - PRICE_CONFIG.MIN_PRICE + 1)) 
    + PRICE_CONFIG.MIN_PRICE;
};

export const generateSamplePrices = (): PriceData[] => {
  const prices: PriceData[] = [];
  
  for (let i = 0; i < PRICE_CONFIG.SAMPLE_DAYS; i++) {
    const date = createDateFromDaysOffset(i);
    prices.push({
      date: formatDateToString(date),
      price: generateRandomPrice(),
      isCheapest: i === 0, // Make first one cheapest for demo
    });
  }
  
  return prices;
};

export const generatePricesForMonth = (year: number, month: number): PriceData[] => {
  const prices: PriceData[] = [];
  
  // Sử dụng dayjs để xử lý ngày tháng (month 1-12: 1=January, 12=December)
  // Tạo ngày đầu tháng và lấy số ngày trong tháng
  const startOfMonth = dayjs().year(year).month(month - 1).startOf('month');
  const daysInMonth = startOfMonth.daysInMonth();
  
  console.log(`Generating prices for ${year}-${month.toString().padStart(2, '0')} (${daysInMonth} days)`);
  console.log(`Start of month: ${startOfMonth.format('YYYY-MM-DD')}`);
  
  // Generate all prices for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = startOfMonth.date(day);
    const dateString = currentDate.format('YYYY-MM-DD');
    
    prices.push({
      date: dateString,
      price: generateRandomPrice(),
      isCheapest: false, // Will be updated after finding the cheapest
    });
  }
  
  console.log(`Generated ${prices.length} prices, first: ${prices[0]?.date}, last: ${prices[prices.length - 1]?.date}`);
  
  // Find the day with the lowest price
  if (prices.length > 0) {
    let cheapestIndex = 0;
    let lowestPrice = prices[0].price;
    
    for (let i = 1; i < prices.length; i++) {
      if (prices[i].price < lowestPrice) {
        lowestPrice = prices[i].price;
        cheapestIndex = i;
      }
    }
    
    // Mark the cheapest day
    prices[cheapestIndex].isCheapest = true;
  }
  
  return prices;
};

// String utilities
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Validation utilities
export const isValidFilePath = (path: string): boolean => {
  return path.trim().length > 0;
};

export const isValidHexColor = (color: string): boolean => {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  return hexColorRegex.test(color);
};

// Array utilities
export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// Delay utility for demo purposes
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Error handling utilities
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unknown error occurred';
};

// Demo utilities
export const simulateAsyncOperation = async (duration: number = 2000): Promise<boolean> => {
  await delay(duration);
  // Randomly succeed or fail for demo purposes
  return Math.random() > 0.2; // 80% success rate
}; 