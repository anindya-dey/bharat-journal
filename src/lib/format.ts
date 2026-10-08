export function formatCrore(value: number): string {
  return `${(value / 100).toFixed(2)} bn`;
}

export function formatLakhCrore(value: number): string {
  return `₹${(value / 100000).toFixed(2)} lakh crore`;
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

export function formatThousands(value: number): string {
  return value.toLocaleString("en-IN");
}
