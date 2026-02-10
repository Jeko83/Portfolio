import { cn } from "@/lib/utils";

export function TypographyH3({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  return (  
    <h3
      className={cn("scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyBlockquote({
  className,
  children,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}
