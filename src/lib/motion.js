export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const fadeUpItemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleInItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.56,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function getSectionMotionProps(shouldReduceMotion, amount = 0.2) {
  return shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount },
        variants: staggerContainerVariants,
      };
}

export function getItemMotionProps(shouldReduceMotion) {
  return shouldReduceMotion ? {} : { variants: fadeUpItemVariants };
}

export function getScaleItemMotionProps(shouldReduceMotion) {
  return shouldReduceMotion ? {} : { variants: scaleInItemVariants };
}

export function getSectionHeaderMotionProps(shouldReduceMotion) {
  return shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.55 },
        variants: sectionHeaderVariants,
      };
}
