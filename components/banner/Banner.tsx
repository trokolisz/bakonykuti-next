import { Card } from '@/components/ui/card';
import { RotatingImages } from './RotatingImages';
import { BannerTitle } from './BannerTitle';


export default function Banner() {
  return (
    <Card className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      <RotatingImages />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      <BannerTitle />
    </Card>
  );
}

