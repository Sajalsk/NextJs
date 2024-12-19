import { cn } from "@/lib/utils";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

interface Option {
  label: string;
  value: string;
  [key: string]: any;
}

interface ReactSelectMultiProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: any;
  placeholder?: string;
  options: OptionsOrGroups<Option, GroupBase<Option>>;
  className?: string;
}

const ReactSelectMulti = <T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  options,
  className,
}: ReactSelectMultiProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={cn("flex flex-col", className)}>
          <Select
            {...field}
            isMulti
            options={options}
            placeholder={placeholder}
            classNamePrefix="react-select"
            onChange={(selectedOptions) => {
              field.onChange(selectedOptions);
            }}
            value={field.value}
            styles={{
              control: (provided, state) => ({
                ...provided,
                borderColor: fieldState.error
                  ? "#f43f5e"
                  : provided.borderColor,
                boxShadow: state.isFocused
                  ? fieldState.error
                    ? "0 0 0 1px #f43f5e"
                    : "0 0 0 1px #2563eb"
                  : provided.boxShadow,
                "&:hover": {
                  borderColor: fieldState.error ? "#f43f5e" : "#2563eb",
                },
              }),
              multiValue: (provided) => ({
                ...provided,
                backgroundColor: "#2563eb",
              }),
              multiValueLabel: (provided) => ({
                ...provided,
                color: "#ffffff",
              }),
              multiValueRemove: (provided) => ({
                ...provided,
                color: "#ffffff",
                ":hover": {
                  backgroundColor: "#f43f5e",
                  color: "#ffffff",
                },
              }),
            }}
          />
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

export default ReactSelectMulti;
