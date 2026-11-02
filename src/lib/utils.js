/**
 * Utility function to conditionally join CSS class names.
 */
export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .join(" ");
}

export default cn;

