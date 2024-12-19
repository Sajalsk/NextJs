import * as React from "react";
import { Input as ShadcnInput } from "../components/ui/input"
import { cn } from "../lib/utils";

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ElementType;
  endIcon?: React.ElementType;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    { className, type, startIcon: StartIcon, endIcon: EndIcon, ...props },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        {StartIcon && (
          <StartIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
        )}
        <ShadcnInput
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            StartIcon ? "pl-10" : "",
            EndIcon ? "pr-10" : "",
            className,
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <EndIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
        )}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export { CustomInput };
