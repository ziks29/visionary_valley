export function Divider({ className }: { className?: string }) {
  return (
    <hr className={`border-[--primary] border-2 rounded-full ${className}`} />
  );
}
