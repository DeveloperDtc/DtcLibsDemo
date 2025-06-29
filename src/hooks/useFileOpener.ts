import { useState, useCallback } from 'react';
import { FileOpenerService } from '../services';

export const useFileOpener = () => {
  const [lastOpenedFile, setLastOpenedFile] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openFile = useCallback(async (path: string) => {
    setIsLoading(true);
    try {
      const result = await FileOpenerService.openFile(path);
      
      if (result.success) {
        setLastOpenedFile(path);
        // Comment: Không hiển thị modal khi mở file thành công
        // FileOpenerService.showFileOpenResult(result);
      } else {
        // Chỉ hiển thị modal khi có lỗi
        FileOpenerService.showFileOpenResult(result);
      }
      
      return result;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const validateAndOpenFile = useCallback(async (path: string) => {
    const validation = FileOpenerService.validateFilePath(path);
    
    if (!validation.isValid) {
      // Hiển thị modal lỗi khi validation thất bại
      FileOpenerService.showFileOpenResult({
        success: false,
        message: validation.message || 'Invalid file path',
      });
      return { success: false, message: validation.message || 'Invalid file path' };
    }
    
    return await openFile(path.trim());
  }, [openFile]);

  const clearLastOpenedFile = useCallback(() => {
    setLastOpenedFile('');
  }, []);

  return {
    lastOpenedFile,
    isLoading,
    openFile,
    validateAndOpenFile,
    clearLastOpenedFile,
  };
}; 