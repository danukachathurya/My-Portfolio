const variantClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

const sizeClasses = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({
  as = "button",
  children,
  className = "",
  href,
  size = "md",
  type,
  variant = "primary",
  ...props
}) {
  const Component = href ? "a" : as;
  const classes = joinClasses(
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    className,
  );

  if (Component === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Component type={type ?? "button"} className={classes} {...props}>
      {children}
    </Component>
  );
}
