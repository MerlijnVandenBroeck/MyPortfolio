import { UserRound } from "lucide-react";
import { personal } from "../data/personal";

export function Portrait({
  className,
  priority = false,
}: {
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      {personal.photo ? (
        <img
          src={personal.photo}
          alt={personal.photoAlt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : (
        <div
          className="portrait-placeholder"
          role="img"
          aria-label="Portrait photo placeholder"
        >
          <UserRound aria-hidden="true" strokeWidth={1} />
          <span className="mono">PHOTO TO ADD</span>
        </div>
      )}
    </div>
  );
}
