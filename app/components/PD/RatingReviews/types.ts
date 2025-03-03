interface RawImagesProps {
  reviewId: number;
  imageUrl: string;
}

export interface ImagesDataProps {
  id: string;
  url: {
    src: string;
    srcSet: string;
  };
}

interface ReviewDataProps {
  [key: number]: ReviewInfoProps;
}

export interface ReviewImagesInfoProps {
  imageUrl: {
    src: string;
    srcSet: string;
  };
  review: ReviewInfoProps;
}

export interface ReviewInfoProps {
  childId: number;
  title: string;
  description: string;
  name: string;
  createdOn: string;
  createdOnText: string;
  likeCount: number;
  rating: number;
  profilePic: string;
  isBuyer: boolean;
  isLikedByUser: boolean;
  id: string;
  isProUser?: boolean;
  label?: string;
  proUser?: boolean;
  variantId: number;
}

export interface ReviewImagesProps {
  total: number;
  reviewImages: RawImagesProps[];
  reviewData: ReviewDataProps;
  pageKey: string;
}

export interface ImageViewerProps {
  activeIndex: number;
  onClose: () => void;
  imagesWithInfo: ReviewImagesInfoProps[];
  product: any;
  hasMore?: boolean;
  loadMore?: () => void;
}

export interface DescriptionProps {
  title?: string;
  description: string;
}

export interface LikeProps {
  count: number;
  isLiked?: boolean;
}

export interface RatingProps {
  rating: number;
  variantIcon?: string;
  variantName?: string;
  createdOn?: string;
  isShade?: boolean;
  svgColor?: string;
}

export interface PreviewProps {
  review: ReviewInfoProps;
  imageUrl: {
    src: string;
    srcSet: string;
  };
  product: any;
}

export interface RawReviewData {
  title: string;
  detail: string;
  nickname: string;
  created_at: string;
  likes: number;
  review_id: string;
  childId: string;
  isLikedByUser: boolean;
  is_buyer: boolean;
  images: string[];
  customerProfileUrl: string;
  reviewCreationText: string;
  value: string;
  pro_user?: boolean;
  label?: string;
}

export interface ReviewData {
  title: string;
  description: string;
  name: string;
  createdOn: string;
  likeCount: number;
  id: number;
  variantId: number;
  isLikedByUser: boolean;
  isBuyer: boolean;
  images: string[];
  profilePic: string;
  createdOnText: string;
  rating: number;
  isProUser?: boolean;
  label?: string;
}

export interface Variant {
  variant_icon: string;
  id: string;
  variant_name: string;
}

export interface ReviewCardProps {
  review: ReviewData;
  product: any;
  handleImageClick: (index: number) => void;
  handleLikeClick: (
    reviewId: number,
    isLikedByUser: boolean,
    likeCount: number,
  ) => void;
}

export interface UpdatedUrlProps {
  url: string;
  slug?: string;
  parentId?: string;
  childId?: string;
  source?: string;
}
