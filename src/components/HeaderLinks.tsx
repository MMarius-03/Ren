import LiquidLink from './LiquidLink';

const links = [
  { href: '/#product', label: 'product' },
  { href: '/#framework', label: 'frappe' },
  { href: '/#contact', label: 'contact' },
];

export default function HeaderLinks() {
  return (
    <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start sm:gap-3">
      {links.map((link) => (
        <LiquidLink href={link.href} key={link.href} size="nav" tone="nav">
          <span className="text-[#8f876f]">~/</span>
          {link.label}
        </LiquidLink>
      ))}
    </div>
  );
}
