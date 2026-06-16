const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
