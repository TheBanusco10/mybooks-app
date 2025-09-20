// utils/colors.ts
function withAlpha(hex: string, alpha: number): string {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Genera variantes con opacidad estilo Tailwind para los colores dentro de tokens.color
 */
export function extendTokensWithAlpha(tokens: {
  color: Record<string, string>;
}) {
  const steps = [5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95];
  const extendedColors: Record<string, string> = { ...tokens.color };

  for (const [name, value] of Object.entries(tokens.color)) {
    // Solo aplicar si es color HEX
    if (typeof value === "string" && value.startsWith("#")) {
      for (const step of steps) {
        extendedColors[`${name}-${step}`] = withAlpha(value, step / 100);
      }
    }
  }

  return {
    ...tokens,
    color: extendedColors,
  };
}
