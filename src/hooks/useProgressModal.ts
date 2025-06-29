import { useState, useCallback } from 'react';
import { ProgressModalService } from '../services';
import { DEFAULT_VALUES } from '../constants';
import type { LoadingDemoType, PredefinedToast } from '../types';

export const useProgressModal = () => {
  const [toastMessage, setToastMessage] = useState<string>(DEFAULT_VALUES.TOAST_MESSAGE);
  const [toastColor, setToastColor] = useState<string>(DEFAULT_VALUES.TOAST_COLOR);
  const [loadingTitle, setLoadingTitle] = useState<string>(DEFAULT_VALUES.LOADING_TITLE);
  const [loadingSubtitle, setLoadingSubtitle] = useState<string>(DEFAULT_VALUES.LOADING_SUBTITLE);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const executeLoadingDemo = useCallback(async (type: LoadingDemoType) => {
    setIsLoading(true);
    try {
      await ProgressModalService.executeLoadingDemo(type, loadingTitle, loadingSubtitle);
    } finally {
      setIsLoading(false);
    }
  }, [loadingTitle, loadingSubtitle]);

  const showCustomToast = useCallback((customColor?: string) => {
    ProgressModalService.showCustomToast(
      toastMessage,
      customColor || toastColor
    );
  }, [toastMessage, toastColor]);

  const showPredefinedToast = useCallback((toast: PredefinedToast) => {
    ProgressModalService.showPredefinedToast(toast);
  }, []);

  const updateToastMessage = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  const updateToastColor = useCallback((color: string) => {
    setToastColor(color);
  }, []);

  const updateLoadingTitle = useCallback((title: string) => {
    setLoadingTitle(title);
  }, []);

  const updateLoadingSubtitle = useCallback((subtitle: string) => {
    setLoadingSubtitle(subtitle);
  }, []);

  const resetToDefaults = useCallback(() => {
    setToastMessage(DEFAULT_VALUES.TOAST_MESSAGE);
    setToastColor(DEFAULT_VALUES.TOAST_COLOR);
    setLoadingTitle(DEFAULT_VALUES.LOADING_TITLE);
    setLoadingSubtitle(DEFAULT_VALUES.LOADING_SUBTITLE);
  }, []);

  const validateToastColor = useCallback((color: string) => {
    return ProgressModalService.isValidToastColor(color);
  }, []);

  return {
    // State
    toastMessage,
    toastColor,
    loadingTitle,
    loadingSubtitle,
    isLoading,
    
    // Actions
    executeLoadingDemo,
    showCustomToast,
    showPredefinedToast,
    updateToastMessage,
    updateToastColor,
    updateLoadingTitle,
    updateLoadingSubtitle,
    resetToDefaults,
    validateToastColor,
  };
}; 