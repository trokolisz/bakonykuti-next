type BackgroundImageProps = {
    src: string;
    isActive: boolean;
    index: number;
  };
  
  export function BackgroundImage({ src, isActive, index }: BackgroundImageProps) {
    return (
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={src}
          alt={`Banner background ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  