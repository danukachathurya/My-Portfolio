import { useState } from "react";
import Button from "./Button";
import { downloadCvPdf } from "../lib/cvPdf";

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
  onClick,
  size = "md",
  variant = "primary",
  ...props
}) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleClick = async (event) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    setIsGenerating(true);

    try {
      await Promise.resolve(downloadCvPdf());
    } finally {
      window.setTimeout(() => setIsGenerating(false), 320);
    }
  };

  return (
    <Button
      as="button"
      type="button"
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
      aria-busy={isGenerating}
      {...props}
    >
      <DownloadIcon className="h-[1.05rem] w-[1.05rem]" />
      <span>{isGenerating ? "Preparing PDF..." : children}</span>
    </Button>
  );
}
