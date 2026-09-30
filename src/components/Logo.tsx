import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "header" | "mark";
};

export default function Logo({ className = "", variant = "header" }: LogoProps) {
  if (variant === "mark") {
    return (
      <span className={`logo-mark ${className}`}>
        <Image
          src="/images/logo-mark.png"
          alt="G7 Futbol Training"
          width={353}
          height={290}
          className="h-auto w-full max-w-[320px] object-contain"
        />
      </span>
    );
  }

  return (
    <Image
      src="/images/logo-header.png"
      alt="G7 Futbol Training"
      width={429}
      height={153}
      className={`h-12 w-auto object-contain sm:h-14 ${className}`}
      priority
    />
  );
}
