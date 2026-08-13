import Image from "next/image";

export default function PartnerMarks({ className }: { className?: string }) {
  return (
    <div
      className={[
        "inline-flex items-center rounded-full border border-[rgba(255,90,31,0.35)] bg-black/55 px-3 py-1.5 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.95)] backdrop-blur-sm",
        className ?? "",
      ].join(" ")}
    >
      <Image
        src="/images/fiba-3x3.jpg"
        alt="Logo FIBA 3x3"
        width={220}
        height={72}
        className="h-9 w-auto md:h-11"
        priority
      />
    </div>
  );
}
