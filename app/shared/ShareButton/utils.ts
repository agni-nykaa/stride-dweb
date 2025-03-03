import { ERROR_TYPES } from '~/constants/error';

import { LINK_COPIED, LINK_COULD_NOT_BE_SHARED, SHARE_SUCCESS } from './constants';

interface ShareData {
    message: string;
    title: string;
    url: string;
  }

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (window.isSecureContext && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  };

  export const shareContent = async ({ message, title, url }: ShareData) => {
    const textToShare = `${message}\n${url}`;
    if (!navigator) return LINK_COULD_NOT_BE_SHARED;

    const handleClipboardFallback = async () => {
      const copied = await copyToClipboard(textToShare);
      return copied ? LINK_COPIED : LINK_COULD_NOT_BE_SHARED;
    };

    if (window.isSecureContext && navigator?.share) {
      try {
        await navigator.share({
          title,
          text: message,
          url,
        });
        return SHARE_SUCCESS;
      } catch (error) {
        if (error instanceof Error && error.name !== ERROR_TYPES.ABORT_ERROR) {
          return handleClipboardFallback();
        }
        return LINK_COULD_NOT_BE_SHARED;
      }
    }

    return handleClipboardFallback();
  };
