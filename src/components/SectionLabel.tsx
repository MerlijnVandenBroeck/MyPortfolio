import type { ReactNode } from "react";
import { Plus } from "lucide-react";
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span>
        {number} / {children}
      </span>
      <Plus aria-hidden="true" size={15} />
    </div>
  );
}
