import { NavigationDotsProps } from './types';

export default function NavigationDots({ total, current, onSelect }: NavigationDotsProps) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`w-2 h-2 rounded-full transition-all ${
            i === current 
              ? 'bg-white w-4' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}