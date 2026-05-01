const sizeClasses = {
  wide: "max-w-7xl",
  default: "max-w-6xl",
  narrow: "max-w-5xl",
  prose: "max-w-4xl",
};

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Container({
  as: Component = "div",
  children,
  className = "",
  size = "default",
  ...props
}) {
  return (
    <Component
      className={joinClasses("container-shell", sizeClasses[size] ?? sizeClasses.default, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
