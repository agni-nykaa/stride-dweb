const handleError = (action: string, key: string, error: any) => {
  console.error(`Error ${action} item ${key} in localStorage`, error);
};

export const localStorageService = {
  getItem: (key: string) => {
    if (!localStorage || !key) return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      handleError('getting', key, error);
      return null;
    }
  },
  setItem: (key: string, value: string): boolean => {
    if (!localStorage || !key || value === null) return false;
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      handleError('setting', key, error);
      return false;
    }
  },
  removeItem: (key: string): boolean => {
    if (!localStorage || !key) return false;
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      handleError('removing', key, error);
      return false;
    }
  },
};
