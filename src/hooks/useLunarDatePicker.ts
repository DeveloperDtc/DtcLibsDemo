import { useState, useCallback, useEffect } from 'react';
import { LunarDatePickerService } from '../services';
import type { DateRange, PriceConfig } from '../types';

export const useLunarDatePicker = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [currentConfig, setCurrentConfig] = useState<PriceConfig>('none');
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Initialize picker configuration
  useEffect(() => {
    LunarDatePickerService.initializePicker();
    setIsInitialized(true);
  }, []);

  const pickDate = useCallback(
    (configType: PriceConfig) => {
      if (!isInitialized) {
        console.warn('Picker not initialized yet');
        return;
      }

      const onDone = (result: any) => {
        const dateRange = LunarDatePickerService.createDateRangeFromResult(result);
        setSelectedRange(dateRange);
      };

      LunarDatePickerService.showPicker(configType, selectedRange, onDone);
      setCurrentConfig(configType);
    },
    [selectedRange, isInitialized]
  );

  const formatDateRange = useCallback(() => {
    return LunarDatePickerService.formatDateRange(selectedRange);
  }, [selectedRange]);

  const clearSelection = useCallback(() => {
    setSelectedRange(undefined);
  }, []);

  const isValidSelection = useCallback(() => {
    return LunarDatePickerService.isValidDateRange(selectedRange);
  }, [selectedRange]);

  return {
    selectedRange,
    currentConfig,
    isInitialized,
    pickDate,
    formatDateRange,
    clearSelection,
    isValidSelection,
  };
}; 