import { Magnetic } from './animate-ui/primitives/effects/magnetic';

export default function MagneticLogo() {
  return (
    <div className="flex justify-center">
      <Magnetic
        className="group relative grid size-32 cursor-pointer place-items-center sm:size-40"
        disableOnTouch
        onlyOnHover
        range={190}
        strength={0.42}
        springOptions={{ stiffness: 130, damping: 12, mass: 0.45 }}
      >
        <div className="absolute inset-0 rounded-full bg-[#d6b05c]/14 blur-3xl transition duration-300 group-hover:bg-[#d6b05c]/28" />

        <img
          alt="René logo"
          className="relative z-10 size-24 rounded-3xl border border-[#d6b05c]/30 bg-[#fff8df]/92 p-3 shadow-[0_0_38px_rgba(214,176,92,0.2)] transition duration-300 ease-out group-hover:scale-105 group-hover:border-[#d6b05c]/70 group-hover:bg-[#fff8df] group-hover:shadow-[0_0_54px_rgba(214,176,92,0.34)] sm:size-28"
          draggable={false}
          src="/svgLOGO.svg"
        />
      </Magnetic>
    </div>
  );
}
