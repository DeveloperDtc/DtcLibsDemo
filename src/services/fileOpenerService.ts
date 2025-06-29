import { Alert } from 'react-native';
import { FileOpener } from '@datacomvn/file-opener';
import { getErrorMessage } from '../utils';

export class FileOpenerService {
  /**
   * Mở file từ đường dẫn cho trước
   */
  static async openFile(path: string): Promise<{
    success: boolean;
    message: string;
  }> {
    try {
      console.log('Attempting to open file:', path);
      const canOpen = await FileOpener.open(path);
      
      if (canOpen) {
        return {
          success: true,
          message: `File đã được mở: ${path}`,
        };
      } else {
        return {
          success: false,
          message: `Không thể mở file: ${path}\n\nCó thể do:\n- File không tồn tại\n- Không có ứng dụng phù hợp\n- Không có quyền truy cập`,
        };
      }
    } catch (error) {
      console.error('Error opening file:', error);
      return {
        success: false,
        message: `Đã xảy ra lỗi khi mở file: ${getErrorMessage(error)}`,
      };
    }
  }

  /**
   * Hiển thị alert với kết quả mở file
   */
  static showFileOpenResult(result: { success: boolean; message: string }) {
    Alert.alert(
      result.success ? 'Thành công!' : 'Lỗi',
      result.message,
      [{ text: 'OK' }]
    );
  }

  /**
   * Validate đường dẫn file
   */
  static validateFilePath(path: string): {
    isValid: boolean;
    message?: string;
  } {
    if (!path.trim()) {
      return {
        isValid: false,
        message: 'Vui lòng nhập đường dẫn file',
      };
    }

    return { isValid: true };
  }

  /**
   * Lấy extension từ đường dẫn file
   */
  static getFileExtension(path: string): string {
    const lastDotIndex = path.lastIndexOf('.');
    if (lastDotIndex === -1) return '';
    return path.substring(lastDotIndex + 1).toLowerCase();
  }

  /**
   * Lấy tên file từ đường dẫn
   */
  static getFileName(path: string): string {
    const lastSlashIndex = Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\'));
    if (lastSlashIndex === -1) return path;
    return path.substring(lastSlashIndex + 1);
  }
} 