import Button from "./Button";

const CV_DRIVE_URL =
  "https://drive.google.com/uc?export=download&id=1GAPLKU6YDHBF3fIEOlIHyC78kAo6W4NU";

function DownloadIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M12 4.5v10" />
      <path d="m8.5 11.5 3.5 3.5 3.5-3.5" />
      <path d="M5 18.5h14" />
    </svg>
  );
}

export default function DownloadCvButton({
  children = "Download CV",
  className = "",
  size = "md",
  variant = "primary",
  ...props
}) {
  return (
    <Button
      href={CV_DRIVE_URL}
      target="_blank"
      rel="noreferrer"
      size={size}
      variant={variant}
      className={className}
      {...props}
    >
      <DownloadIcon className="h-[1.05rem] w-[1.05rem]" />
      <span>{children}</span>
    </Button>
  );
}
