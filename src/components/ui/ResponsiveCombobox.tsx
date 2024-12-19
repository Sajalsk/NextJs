import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Button } from "./button";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface ComboboxOption {
  label: string;
  value: string | boolean;
  disabled?: boolean;
  [key: string]: any;
}

interface ResponsiveComboboxProps {
  name: string;
  control: any;
  rules?: any;
  placeholder?: string;
  options: ComboboxOption[];
  onSelectedOption?: (option: ComboboxOption) => void;
  className?: string;
  disabled?: boolean;
  searchPlaceholder?: string;
  selectedOption?: any;
}

const ResponsiveCombobox: React.FC<ResponsiveComboboxProps> = ({
  name,
  control,
  rules,
  placeholder,
  options,
  onSelectedOption,
  className,
  disabled,
  searchPlaceholder,
  selectedOption,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={cn("flex flex-col", className)}>
          {isMobile ? (
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  disabled={disabled}
                  className={cn(
                    "justify-between text-xs",
                    field.value ? "text-[#000000]" : "text-[#878080]",
                  )}
                >
                  {field.value?.label || placeholder}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-4">
                  <div className="relative mb-4">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={searchPlaceholder || "Search..."}
                      className="pl-8 text-xs text-[#878080] focus-visible:ring-transparent"
                    />
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                  <div className="space-y-2 text-sm">
                    {options
                      .filter((option) =>
                        option.label
                          .toLowerCase()
                          .includes(inputValue.toLowerCase()),
                      )
                      .map((option) => (
                        <div
                          key={option.label}
                          onClick={() => {
                            if (!option.disabled) {
                              field.onChange(option);
                              setIsOpen(false);
                              setInputValue("");
                              if (onSelectedOption) {
                                onSelectedOption(option);
                              }
                            }
                          }}
                          className={cn(
                            "cursor-pointer p-2",
                            option.disabled
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "hover:bg-gray-100",
                          )}
                        >
                          {option.label}
                        </div>
                      ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  disabled={disabled}
                  className={cn(
                    " mac:ml-[-4px] justify-between mac:text-[11px] text-xs",
                    field.value ? "text-[#000000]" : "text-[#878080]",
                  )}
                >
                  {field.value?.label || placeholder}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className=" mac:w-40 w-60 p-2">
                <div className="relative mb-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={searchPlaceholder || "Search..."}
                    className="pl-8 text-xs text-[#878080] focus-visible:ring-transparent"
                  />
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="max-h-60  mac:text-[12px] overflow-y-auto text-sm">
                  {options
                    .filter((option) =>
                      option.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()),
                    )
                    .map((option) => (
                      <div
                        key={option.label}
                        onClick={() => {
                          if (!option.disabled) {
                            field.onChange(option);
                            setIsOpen(false);
                            setInputValue("");
                            if (onSelectedOption) {
                              onSelectedOption(option);
                            }
                          }
                        }}
                        className={cn(
                          "cursor-pointer p-2",
                          option.disabled
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : option.label == selectedOption?.label
                            ? " text-slate-400  cursor-not-allowed"
                            : "hover:bg-gray-100",
                        )}
                      >
                        {option.label}
                      </div>
                    ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
          {fieldState.error && (
            <span className="mt-1 text-xs text-red-500">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default ResponsiveCombobox;
