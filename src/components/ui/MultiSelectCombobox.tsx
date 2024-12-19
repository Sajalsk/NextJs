import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

interface ComboboxOption {
  label: string;
  value: string;
}

interface MultiSelectComboboxProps {
  name: string;
  control: any;
  rules?: any;
  placeholder?: string;
  options: ComboboxOption[];
  className?: string;
}

const MultiSelectCombobox: React.FC<MultiSelectComboboxProps> = ({
  name,
  control,
  rules,
  placeholder,
  options,
  className,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={[]}
      render={({ field, fieldState }) => (
        <div className={cn("flex flex-col", className)}>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-between">
                {field.value.length > 0
                  ? `${field.value.length} selected`
                  : placeholder}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
                className="mb-2"
              />
              <div className="max-h-60 overflow-y-auto">
                {options
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()),
                  )
                  .map((option) => {
                    const isSelected = field.value.some(
                      (selectedOption: any) =>
                        selectedOption.value === option.value,
                    );
                    return (
                      <div
                        key={option.value}
                        onClick={() => {
                          let newValue;
                          if (isSelected) {
                            newValue = field.value.filter(
                              (selectedOption: any) =>
                                selectedOption.value !== option.value,
                            );
                          } else {
                            newValue = [...field.value, option];
                          }
                          field.onChange(newValue);
                        }}
                        className={cn(
                          "flex cursor-pointer items-center p-2 hover:bg-gray-100",
                          isSelected && "bg-gray-200",
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          readOnly
                          className="mr-2"
                        />
                        {option.label}
                      </div>
                    );
                  })}
              </div>
            </PopoverContent>
          </Popover>
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

export default MultiSelectCombobox;
