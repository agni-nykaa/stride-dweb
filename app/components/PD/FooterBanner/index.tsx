import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

interface FooterBannerProps {
  src: string;
  alt: string;
}

const FooterBanner = ({ src, alt }: FooterBannerProps) => {
  if (!src) return null;

  return (
    <Wrapper>
      <Logo
        src={src}
        alt={alt}
      />
    </Wrapper>
  );
};

export default FooterBanner;
