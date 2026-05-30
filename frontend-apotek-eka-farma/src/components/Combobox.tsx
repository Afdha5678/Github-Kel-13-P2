import React, { useState, useRef, useEffect } from 'react';

export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface ComboboxProps {
    options: ComboboxOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    required?: boolean;
}

export function Combobox({
    options,
    value,
    onChange,
    placeholder = "Pilih...",
    disabled = false,
    className = "",
    required = false
}: ComboboxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);
    const displayValue = isOpen ? query : (selectedOption?.label || '');

    const filteredOptions = query === ''
        ? options
        : options.filter((option) =>
            option.label.toLowerCase().includes(query.toLowerCase())
        );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setQuery('');
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (!isOpen) setIsOpen(true);
    };

    const handleOptionSelect = (option: ComboboxOption) => {
        if (option.disabled) return;
        onChange(option.value);
        setQuery('');
        setIsOpen(false);
    };

    return (
        <div ref={wrapperRef} className={`relative ${className}`}>
            <div className="relative w-full">
                <input
                    type="text"
                    className={`block w-full rounded-lg border-neutral-300 shadow-sm sm:text-sm p-2.5 border bg-white focus:border-rose-500 focus:ring-rose-500 transition-colors ${disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50' : 'cursor-text'}`}
                    placeholder={placeholder}
                    value={displayValue}
                    onChange={handleInputChange}
                    onClick={() => !disabled && setIsOpen(true)}
                    onFocus={() => !disabled && setIsOpen(true)}
                    disabled={disabled}
                    required={required && !value}
                />
                {/* Invisible select to maintain native required behavior if needed, or handle required in input */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {isOpen && !disabled && (
                <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 max-h-60 overflow-auto">
                    {filteredOptions.length === 0 ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-neutral-500 text-sm">
                            Tidak ditemukan.
                        </div>
                    ) : (
                        <ul className="py-1">
                            {filteredOptions.map((option) => (
                                <li
                                    key={option.value}
                                    className={`relative cursor-pointer select-none py-2 px-4 text-sm ${option.disabled ? 'text-neutral-400 bg-neutral-50 cursor-not-allowed' : option.value === value ? 'bg-rose-50 text-rose-700 font-medium' : 'text-neutral-900 hover:bg-neutral-50'}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
