import { UpdatedUrlProps } from './types';

export const getUpdatedUrl = ({
  url,
  slug,
  parentId,
  childId,
  source,
}: UpdatedUrlProps) => {
  if (slug) {
    url = url.replace('{slug}', slug);
  }
  if (parentId) {
    url = url.replace('{id}', parentId);
  }
  if (childId) {
    url = url.replace('{childId}', childId);
  }
  if (source) {
    url = url.replace('{trackingSource}', source);
  }
  return url;
};
