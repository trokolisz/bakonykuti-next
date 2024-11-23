export interface ImageInfo {
    src: string;
    alt?: string;
  }
  
  export interface BackgroundImageProps {
    imageInfo: ImageInfo;
    isActive: boolean;
    isPreloaded: boolean;
    index: number;
  }
  
  export interface NavigationDotsProps {
    total: number;
    current: number;
    onSelect: (index: number) => void;
  }
  
  export interface ArrowControlProps {
    direction: 'left' | 'right';
    onClick: () => void;
  }