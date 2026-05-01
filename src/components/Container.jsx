import { cn } from "../lib/cn";

const sizeClasses = {
  wide: "max-w-7xl",
  default: "max-w-6xl",
  narrow: "max-w-5xl",
  prose: "max-w-4xl",
};

export default function Container({
  as: Component = "div",
  children,
  className = "",
  size = "default",
  ...props
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        sizeClasses[size] ?? sizeClasses.default,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
