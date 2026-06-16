const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "/manesocietyco") : "";

export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // External URLs pass through unchanged
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${basePath}${src}`;
}
