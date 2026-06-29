import { StarsBackground } from './animate-ui/components/backgrounds/stars';

export default function BackgroundStars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]"
    >
      <StarsBackground
        className="absolute inset-0 bg-[#050505]"
        factor={0.025}
        pointerEvents={false}
        speed={90}
        starColor="#d6b05c"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,176,92,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(102,153,136,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
