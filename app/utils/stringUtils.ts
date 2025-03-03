export const stripScriptTags = (str = {}) => {
  const stringifiedStr = JSON.stringify(str);
  return JSON.parse(stringifiedStr.replace(/<script>.*<\/script>/gi, ''));
};

export const truncateText = (text: string, maxLength: number) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
