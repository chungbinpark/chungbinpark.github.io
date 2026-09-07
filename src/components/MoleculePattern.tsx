export default function MoleculePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <line x1="40" y1="60" x2="120" y2="30" />
        <line x1="120" y1="30" x2="200" y2="80" />
        <line x1="200" y1="80" x2="290" y2="50" />
        <line x1="200" y1="80" x2="220" y2="170" />
        <line x1="220" y1="170" x2="140" y2="220" />
        <line x1="220" y1="170" x2="310" y2="200" />
        <line x1="310" y1="200" x2="360" y2="140" />
        <line x1="140" y1="220" x2="80" y2="290" />
        <line x1="140" y1="220" x2="180" y2="320" />
        <line x1="310" y1="200" x2="340" y2="300" />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="60" r="5" />
        <circle cx="120" cy="30" r="7" />
        <circle cx="200" cy="80" r="9" />
        <circle cx="290" cy="50" r="5" />
        <circle cx="220" cy="170" r="8" />
        <circle cx="140" cy="220" r="6" />
        <circle cx="310" cy="200" r="7" />
        <circle cx="360" cy="140" r="5" />
        <circle cx="80" cy="290" r="5" />
        <circle cx="180" cy="320" r="6" />
        <circle cx="340" cy="300" r="5" />
      </g>
    </svg>
  );
}
