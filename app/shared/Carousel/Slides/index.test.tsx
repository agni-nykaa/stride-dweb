import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slides from './index';

describe('Slides component', () => {
  const images = [
    {
      url: 'https://example.com/media/image1.jpg',
      mediaType: 'image',
      title: 'Sample Image 1',
      id: 'image-1',
    },
    {
      url: 'https://example.com/media/image2.jpg',
      mediaType: 'image',
      title: 'Sample Image 2',
      id: 'image-2',
    },
  ];

  it('renders slides correctly', () => {
    render(
      <Slides
        media={images}
        handleFullScreen={() => {}}
        view="default"
        activeSlide={0}
      />,
    );
    const slides = screen.getAllByRole('img');
    expect(slides).toHaveLength(2);
  });

  it('renders the correct image sources', () => {
    render(
      <Slides
        media={images}
        handleFullScreen={() => {}}
        view="default"
        activeSlide={0}
      />,
    );
    const slides = screen.getAllByRole('img');
    slides.forEach((slide, index) => {
      expect(slide.getAttribute('src')).toMatch(new RegExp(images[index].url));
    });
  });

  it('renders eager loading for the first image', () => {
    render(
      <Slides
        media={images}
        handleFullScreen={() => {}}
        view="default"
        activeSlide={0}
      />,
    );
    const firstSlide = screen.getAllByRole('img')[0];
    expect(firstSlide).toHaveAttribute('loading', 'eager');
  });

  it('renders lazy loading for subsequent images', () => {
    render(
      <Slides
        media={images}
        handleFullScreen={() => {}}
        view="default"
        activeSlide={0}
      />,
    );
    const slides = screen.getAllByRole('img');
    slides.slice(1).forEach((slide) => {
      expect(slide).toHaveAttribute('loading', 'lazy');
    });
  });
});
