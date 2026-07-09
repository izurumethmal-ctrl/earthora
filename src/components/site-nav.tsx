import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collection", label: "Collection" },
  { to: "/gallery", label: "Gallery" },
  { to: "/ingredients", label: "Natural Dye Source" },
  { to: "/contact", label: "Contact" },
] as const;

// Add these keyframes to your global CSS or component
const animationStyles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
  }

  .animate-slide-down {
    animation: slideDown 0.4s ease-out forwards;
  }

  .animate-fade-in-right {
    animation: fadeInRight 0.4s ease-out forwards;
  }
`;

export function SiteNav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  // Inject animation styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  // Smooth scroll detection with throttle
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu with smooth transition
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setOpen(false), 150);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div 
        className="w-full bg-primary text-primary-foreground text-[11px] tracking-[0.25em] uppercase py-2 text-center font-medium"
        style={{
          animation: "slideDown 0.5s ease-out",
        }}
      >
        Free Shipping · Islandwide Delivery
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled ? "glass border-b border-border/60 backdrop-blur-xl bg-background/80" : "bg-transparent",
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:py-5">
          <Link 
            to="/" 
            className="group flex items-center gap-2"
            style={{
              transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Leaf 
              className="h-5 w-5 text-leaf" 
              style={{
                transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(12deg) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
              }}
            />
            <span 
              className="text-lg font-light tracking-[0.3em] uppercase"
              style={{
                transition: "color 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--leaf)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              Earthora
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-10 text-sm">
            {links.map((l) => (
              <li key={l.to} className="relative">
                <Link
                  to={l.to}
                  className="relative text-muted-foreground inline-block"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.color = "var(--foreground)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative">
                        {l.label}
                        <span
                          className={cn(
                            "absolute -bottom-1.5 left-0 h-[2px] bg-gradient-to-r from-leaf to-leaf/50",
                            isActive ? "w-full" : "w-0"
                          )}
                          style={{
                            transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                            background: "linear-gradient(to right, var(--leaf), var(--leaf-alpha))",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.width = "100%";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.width = "0";
                            }
                          }}
                        />
                        {/* Glow effect */}
                        <span
                          className="absolute -bottom-1.5 left-0 h-[2px] blur-sm"
                          style={{
                            transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                            background: "var(--leaf)",
                            opacity: isActive ? 0.3 : 0,
                            width: isActive ? "100%" : "0%",
                            animation: isActive ? "pulseGlow 2s ease-in-out infinite" : "none",
                          }}
                        />
                      </span>
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-full border border-border/70 p-2.5 text-muted-foreground transition-all duration-300 hover:border-leaf hover:text-foreground"
              style={{
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--leaf-rgb), 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {theme === "dark" ? (
                  <Sun 
                    className="h-4 w-4"
                    style={{
                      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                ) : (
                  <Moon 
                    className="h-4 w-4"
                    style={{
                      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                )}
              </span>
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="lg:hidden rounded-full border border-border/70 p-2.5 transition-all duration-300 hover:border-leaf"
              style={{
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--leaf-rgb), 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {open ? (
                  <X 
                    className="h-4 w-4"
                    style={{
                      transform: "rotate(90deg)",
                      transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                ) : (
                  <Menu 
                    className="h-4 w-4"
                    style={{
                      transform: "rotate(0deg)",
                      transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                )}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu with Enhanced Animation */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: open ? "80vh" : "0",
            opacity: open ? 1 : 0,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="glass border-t border-border/60 backdrop-blur-xl bg-background/95">
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l, index) => (
                <li 
                  key={l.to}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${open ? index * 60 : 0}ms`,
                  }}
                >
                  <Link
                    to={l.to}
                    className="text-lg font-light tracking-wide text-muted-foreground inline-block transition-all duration-300 hover:text-foreground"
                    style={{
                      transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    activeProps={{ className: "text-foreground font-medium" }}
                    activeOptions={{ exact: l.to === "/" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(8px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}