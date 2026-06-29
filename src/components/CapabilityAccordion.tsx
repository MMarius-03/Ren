import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const items = [
  {
    title: 'Document-driven operations',
    body: 'Use structured documents for batches, lots, transfers, quality checks, and dispatch records.',
  },
  {
    title: 'Roles and approvals',
    body: 'Map plant, warehouse, quality, and management permissions to real workflows.',
  },
  {
    title: 'Reports without spreadsheet chaos',
    body: 'Centralize operational data so teams can inspect yields, stock, and exceptions from one source.',
  },
];

export default function CapabilityAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-[#d6b05c]/15 border-y border-[#d6b05c]/15">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={item.title}>
            <button
              className="group flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-base font-bold text-[#fff8df] transition group-hover:text-[#d6b05c]">
                {item.title}
              </span>
              <span className="grid size-7 place-items-center border border-[#d6b05c]/25 text-[#d6b05c] transition group-hover:bg-[#d6b05c] group-hover:text-[#050505]">
                {isOpen ? '-' : '+'}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <p className="max-w-2xl pb-5 leading-8 text-[#c7bda8]">{item.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
