interface StarRatingProps {
  rating: number;
  size?: number;
}

function FullStar({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#F59E0B"
        stroke="#F59E0B"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HalfStar({ size }: { size: number }) {
  const clipId = `half-star-clip-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      {/* Empty star outline */}
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.35"
      />
      {/* Filled left half */}
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#F59E0B"
        stroke="#F59E0B"
        strokeWidth="1"
        strokeLinejoin="round"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FullStar key={`full-${i}`} size={size} />
      ))}
      {hasHalfStar && <HalfStar size={size} />}
    </div>
  );
}
