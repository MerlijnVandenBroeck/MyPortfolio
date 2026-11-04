// Motion uses seconds and pixels; CSS interaction timing lives in tokens.css.
// Set enabled to false to turn off reveals without editing individual sections.
export const motionSettings = {
  enabled: true,
  reveal: { duration: 0.55, distance: 20, viewportAmount: 0.1 },
} as const;
