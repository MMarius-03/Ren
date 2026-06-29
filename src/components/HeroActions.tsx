import LiquidLink from './LiquidLink';

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <LiquidLink href="#product" tone="primary">
        Explore
      </LiquidLink>

      <LiquidLink href="#contact" tone="quiet">
        Contact
      </LiquidLink>
    </div>
  );
}
