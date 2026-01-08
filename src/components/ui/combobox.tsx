"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
// We need Input for the trigger
import { Input } from "@/components/ui/input"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxProps {
    items: { value: string; label: string }[]
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    allowCustom?: boolean // Implicitly true with this design, kept for API compatibility
    className?: string
}

export function Combobox({
    items,
    placeholder = "Select item...",
    value = "",
    onChange,
    className,
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false)

    // Filter items based on the current value logic
    // If the user types "Vis", we want to show "Visakhapatnam"
    const filteredItems = items.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
    )

    const handleSelect = (selectedValue: string) => {
        onChange?.(selectedValue)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="relative w-full">
                    {/* Use a div wrapper to handle click/focus if needed, or just Input directly */}
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => {
                            onChange?.(e.target.value)
                            setOpen(true)
                        }}
                        onFocus={() => setOpen(true)}
                        className={className} // Pass external styles (height, padding) here
                        role="combobox"
                        aria-expanded={open}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="w-[--radix-popover-trigger-width] p-0"
                onOpenAutoFocus={(e) => e.preventDefault()} // Prevent focus stealing so typing continues
            >
                <Command>
                    {/* Note: We aren't using CommandInput here because the main Input is outside. 
                We just list the items. */}
                    <CommandList>
                        {filteredItems.length === 0 && <CommandEmpty>No matching suggestions.</CommandEmpty>}
                        <CommandGroup>
                            {filteredItems.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        // CommandItem usually returns lowercase value. 
                                        // We want the actual label or value from our item.
                                        // Let's use the item.value (which is what we store usually) 
                                        // OR item.label if the user wants the display text.
                                        // The form uses these values for state.
                                        // Let's use item.value as the source of truth for "selection", 
                                        // BUT prompt asks for "type or choose". If they select, we probably want the Label to fill the box?
                                        // Actually `suggestions-form` stores strings like "visakhapatnam". 
                                        // The Input shows this value.
                                        // If I select "Visakhapatnam", I want "Visakhapatnam" in the box? Or "visakhapatnam"?
                                        // Usually Display Name (Label).
                                        // But the parent state `location` holds the value passed to `value`.
                                        // Let's assume the parent expects the `item.value` (lowercase) or `item.label`?
                                        // In `suggestions-form`, items are { value: "visakhapatnam", label: "Visakhapatnam" }.
                                        // If `value` state is "visakhapatnam", the Input will show "visakhapatnam".
                                        // Ideally Input shows "Visakhapatnam".
                                        // So the parent `onChange` should probably take the LABEL if we want the input to look nice.
                                        // OR we just use the Label as the Value for simplicity in this specific "Type or Choose" context.
                                        // Let's assume standard behavior: On select, fill with Label (pretty), pass Value (ID) to backend?
                                        // But here `value` prop controls the Input text. So `value` MUST be what we want visible.
                                        // So we should pass `item.label` to `onChange`.

                                        handleSelect(item.label)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            // Compare loosely or mostly match
                                            value.toLowerCase() === item.label.toLowerCase() ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
