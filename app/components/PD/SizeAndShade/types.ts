import { AvailabilityStatus } from './constants';

export interface Variant {
  id: string;
  variantName: string;
  shadeImage: string;
  price: number;
  offerPrice: number;
  inStock: boolean;
  quantity: number;
  isBestSeller: boolean;
  images: string[];
  isMini: boolean;
}

export interface ProductPreviewProps {
  productTitle: string;
  variantsLength: number;
  imageUrls: string[];
  selectedImageIndex: number;
  onImageSelect: (index: number) => void;
  variantName: string;
}

export interface ShadeProps {
  variants: Variant[];
  onShadeSelect?: (index: number) => void;
  productTitle: string;
}

export interface SecondSectionProps {
  variants: Variant[];
  onSelect?: (index: number) => void;
  selectedVariantIndex: number;
}

export interface ShadeVariantsProps {
  variants: Variant[];
  onSelect?: (index: number) => void;
  selectedVariantIndex: number;
}

export interface SelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  variants: Variant[];
  productTitle: string;
  isSizeView?: boolean;
}

export interface AvailabilityResult {
  status: AvailabilityStatus;
  quantity?: number;
}
