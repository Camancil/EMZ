import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/70 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-black shadow-[0_0_0_1px_rgba(255,90,31,0.25)] hover:scale-[1.03]",
        outline:
          "border border-[rgba(255,90,31,0.7)] bg-transparent text-chalk hover:bg-[rgba(255,90,31,0.08)] hover:scale-[1.03]",
        ghost:
          "bg-transparent text-chalk hover:bg-[rgba(255,255,255,0.06)] hover:scale-[1.03]",
      },
      size: {
        md: "h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

export default function Button({ href, className, variant, size, children, ...props }: ButtonProps) {
  const classes = clsx(buttonVariants({ variant, size }), className);

  if (href) {
    const external = /^https?:\/\//i.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

