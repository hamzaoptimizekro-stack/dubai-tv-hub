import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function PageBreadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/50 border-b">
      <div className="container py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li className="inline-flex items-center gap-1.5">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
              {item.href ? (
                <Link to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
