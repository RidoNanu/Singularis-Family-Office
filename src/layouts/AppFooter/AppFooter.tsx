import { navigationItems } from '../../constants/navigation';

export function AppFooter() {
  return (
    <footer className="border-t border-[#1E3754]/8 bg-white">
      <div className="mx-auto max-w-[84rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#1E3754]/55">
              Singularis Family Office
            </p>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-[1.9] text-[#1E3754]/68">
              A discreet institutional framework for stewardship, structure, and continuity.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#1E3754]/58 transition-colors hover:text-[#1E3754]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}