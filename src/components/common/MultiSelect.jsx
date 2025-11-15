"use client";

import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { X, ChevronDown } from "lucide-react";

export function MultiSelect({
  options = [],
  value = [],
  onChange,
  placeholder = "Select options...",
  labelKey = "label",
  valueKey = "value",
  maxSelected = 5,
}) {
  const [open, setOpen] = useState(false);

  const toggleOption = (option) => {
    if (value.includes(option[valueKey])) {
      onChange(value.filter((v) => v !== option[valueKey]));
    } else {
      if (value.length < maxSelected) {
        onChange([...value, option[valueKey]]);
      }
    }
  };

  const removeItem = (val) => {
    onChange(value.filter((v) => v !== val));
  };

  const selectedItems = options.filter((opt) => value.includes(opt[valueKey]));

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className="flex min-h-[46px] w-full cursor-pointer flex-wrap items-center gap-2 rounded-md border px-3 py-2 text-sm focus-within:ring-2"
            onClick={() => setOpen(true)}
          >
            {/* Selected badges */}
            <div className="flex flex-wrap gap-1 flex-1">
              {selectedItems.length === 0 && (
                <span className="text-muted-foreground">{placeholder}</span>
              )}

              {selectedItems.map((item) => (
                <Badge
                  key={item[valueKey]}
                  className="flex items-center gap-1 rounded-md px-2 py-1"
                  variant="secondary"
                >
                  {item[labelKey]}
                  <X
                    size={14}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item[valueKey]);
                    }}
                  />
                </Badge>
              ))}
            </div>

            {/* Dropdown icon */}
            <ChevronDown className="ml-2 text-gray-500" size={18} />
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>

              <CommandGroup>
                {options.map((option) => {
                  const selected = value.includes(option[valueKey]);
                  const disabled = !selected && value.length >= maxSelected;

                  return (
                    <CommandItem
                      key={option[valueKey]}
                      onSelect={() => toggleOption(option)}
                      disabled={disabled}
                    >
                      <div
                        className={`mr-2 h-4 w-4 rounded-sm border ${
                          selected ? "bg-primary" : ""
                        } ${disabled ? "opacity-40" : ""}`}
                      />
                      {option[labelKey]}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
