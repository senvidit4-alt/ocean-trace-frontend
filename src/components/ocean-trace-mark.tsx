import { Waves } from "lucide-react";

export function OceanTraceMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="brand-mark shrink-0" aria-hidden="true">
        <Waves />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-xl font-bold uppercase leading-none text-foreground">
          Ocean Trace
        </span>
        {!compact && (
          <span className="mt-1 block truncate font-mono text-[10px] font-semibold uppercase text-primary">
            Maritime Forensics DSS
          </span>
        )}
      </span>
    </div>
  );
}