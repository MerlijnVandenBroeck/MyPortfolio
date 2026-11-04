import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export function NotFound() {
  return (
    <section className="section not-found">
      <span className="mono accent">404 / OUT OF BOUNDS</span>
      <h1>This level isn't here.</h1>
      <Link className="button" to="/">
        BACK TO HOME <ArrowLeft size={16} />
      </Link>
    </section>
  );
}
