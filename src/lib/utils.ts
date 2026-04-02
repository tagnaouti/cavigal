const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/cavigal";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
