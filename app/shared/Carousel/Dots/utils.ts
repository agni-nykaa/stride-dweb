import { DOTS } from './constants';

export const calculateTranslateX = (
  active: number,
  totalDots: number,
): number => {
  if (!totalDots) return 0;
  if (totalDots <= DOTS.MAX_VISIBLE) return 0;
  const startDot = Math.max(
    0,
    Math.min(active - 2, totalDots - DOTS.MAX_VISIBLE),
  );
  return totalDots <= DOTS.MAX_VISIBLE ? 0 : -startDot * DOTS.WIDTH;
};
