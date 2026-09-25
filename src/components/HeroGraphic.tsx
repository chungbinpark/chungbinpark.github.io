type Pt = { x: number; y: number };

// A small triangular lattice, evoking the ionic crystal structures studied
// in the lab's organic ionic plastic crystal (OIPC) work.
function buildLattice(rows: number, cols: number, dx: number, dy: number) {
  const grid: Pt[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: Pt[] = [];
    for (let c = 0; c < cols; c++) {
      row.push({ x: c * dx + (r % 2 === 1 ? dx / 2 : 0), y: r * dy });
    }
    grid.push(row);
  }
  const points = grid.flat();
  const lines: [Pt, Pt][] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p = grid[r][c];
      if (c < cols - 1) lines.push([p, grid[r][c + 1]]);
      if (r < rows - 1) {
        lines.push([p, grid[r + 1][c]]);
        if (r % 2 === 0 && c < cols - 1) lines.push([p, grid[r + 1][c + 1]]);
        if (r % 2 === 1 && c > 0) lines.push([p, grid[r + 1][c - 1]]);
      }
    }
  }
  return { points, lines };
}

export default function HeroGraphic({ className = "" }: { className?: string }) {
  const { points, lines } = buildLattice(4, 4, 30, 26);

  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Confined polymer/DNA chain ejecting from a nanoscale capsid,
          referencing the lab's packaging & ejection dynamics research */}
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.55">
        <circle cx="150" cy="140" r="95" strokeDasharray="5 7" />
        <path d="M 75 140 C 90 105, 115 105, 130 140 C 145 175, 170 175, 185 140 C 200 105, 225 108, 235 130" />
      </g>
      <g stroke="currentColor" strokeWidth="2" opacity="0.7" strokeLinecap="round">
        <path d="M 235 130 C 260 150, 280 170, 300 200 C 320 230, 330 260, 345 300" />
      </g>
      <g fill="currentColor" opacity="0.7">
        <circle cx="280" cy="170" r="4" />
        <circle cx="310" cy="215" r="4.5" />
        <circle cx="345" cy="300" r="5" />
      </g>

      {/* Ionic crystal lattice, referencing the lab's organic ionic
          plastic crystal (OIPC) ion-transport research */}
      <g transform="translate(250,250)" stroke="currentColor" strokeWidth="1" opacity="0.4">
        {lines.map((l, i) => (
          <line key={i} x1={l[0].x} y1={l[0].y} x2={l[1].x} y2={l[1].y} />
        ))}
      </g>
      <g transform="translate(250,250)" fill="currentColor" opacity="0.6">
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3.5" />
        ))}
      </g>
    </svg>
  );
}
