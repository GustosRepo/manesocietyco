export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Return src directly for Vercel deployment
  return src;
}
