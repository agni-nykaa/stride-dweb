import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

interface HighlightsProps {
  data: string;
}
const Highlights = styled.div`
  display: -webkit-box;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  ${({ theme }) => theme?.typography?.bodyMedium};
  margin-top: ${({ theme }) => theme?.spacing?.spacing20};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;
`;

export default function Highlight({ data }: HighlightsProps) {
  if (!data) {
    return null;
  }
  return <Highlights>{data}</Highlights>;
}
