import {
  hideLoading,
  showLoading,
  showToast,
} from '@datacomvn/progress-and-modal';
import { delay } from '../utils';
import type { LoadingDemoType, PredefinedToast } from '../types';

export class ProgressModalService {
  /**
   * Hiển thị loading cơ bản
   */
  static async showBasicLoading(duration: number = 2000) {
    showLoading();
    await delay(duration);
    hideLoading();
  }

  /**
   * Hiển thị loading với title và subtitle tùy chỉnh
   */
  static async showCustomLoading(
    title: string,
    subtitle: string,
    duration: number = 3000
  ) {
    showLoading({
      lottie: 'loading',
      title,
      subtitle,
    });
    
    await delay(duration);
    hideLoading();
  }

  /**
   * Hiển thị lottie loading với success
   */
  static async showLottieSuccess(duration: number = 3000) {
    showLoading({
      lottie: 'loading',
      title: 'Processing...',
      subtitle: 'Please wait while we process your request',
    });

    await delay(duration);
    
    hideLoading({
      lottie: 'done',
      title: 'Success!',
      subtitle: 'Operation completed successfully',
    });
  }

  /**
   * Hiển thị lottie loading với failed
   */
  static async showLottieFailed(duration: number = 3000) {
    showLoading({
      lottie: 'loading',
      title: 'Processing...',
      subtitle: 'Attempting to complete operation',
    });

    await delay(duration);
    
    hideLoading({
      lottie: 'failed',
      title: 'Operation Failed',
      subtitle: 'Please try again later',
    });
  }

  /**
   * Hiển thị toast với message và màu tùy chỉnh
   */
  static showCustomToast(message: string, backgroundColor: string) {
    showToast({
      message,
      backgroundColor,
      textColor: '#FFFFFF',
    });
  }

  /**
   * Hiển thị toast từ predefined toast
   */
  static showPredefinedToast(toast: PredefinedToast) {
    showToast({
      message: toast.message,
      backgroundColor: toast.color,
      textColor: '#FFFFFF',
    });
  }

  /**
   * Thực thi demo loading theo loại
   */
  static async executeLoadingDemo(
    type: LoadingDemoType,
    customTitle?: string,
    customSubtitle?: string
  ) {
    switch (type) {
      case 'basic':
        await this.showBasicLoading();
        break;
      case 'custom':
        await this.showCustomLoading(
          customTitle || 'Loading...',
          customSubtitle || 'Please wait...'
        );
        break;
      case 'lottie-success':
        await this.showLottieSuccess();
        break;
      case 'lottie-failed':
        await this.showLottieFailed();
        break;
    }
  }

  /**
   * Validate toast color
   */
  static isValidToastColor(color: string): boolean {
    // Basic hex color validation
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
    return hexColorRegex.test(color);
  }

  /**
   * Get default toast colors
   */
  static getDefaultToastColors() {
    return {
      success: '#4CAF50',
      error: '#F44336',
      warning: '#FF9800',
      info: '#2196F3',
    };
  }
} 