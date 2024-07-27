import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CustomColorDropdownProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const CustomColorDropdown: React.FC<CustomColorDropdownProps> = ({
  selectedColor,
  onSelectColor,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChangeComplete = (color: any) => {
    onSelectColor(color.hex);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full"
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between  border rounded-lg p-2"
        style={{ backgroundColor: selectedColor || "#f0f0f0" }}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.82684 13.1693L2.41018 12.5859H4.16018L9.41018 7.33594" stroke="#14171B" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.41016 12.5859V10.8359L7.66016 5.58594" stroke="#14171B" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.41016 3.83594L11.3935 1.8526C11.6256 1.62054 11.9403 1.49017 12.2685 1.49017C12.5967 1.49017 12.9114 1.62054 13.1435 1.8526C13.3756 2.08467 13.5059 2.39941 13.5059 2.7276C13.5059 3.05579 13.3756 3.37054 13.1435 3.6026L11.1602 5.58594L11.3935 5.81927C11.5084 5.93418 11.5996 6.07059 11.6617 6.22072C11.7239 6.37086 11.7559 6.53177 11.7559 6.69427C11.7559 6.85677 11.7239 7.01768 11.6617 7.16782C11.5996 7.31795 11.5084 7.45436 11.3935 7.56927C11.2786 7.68418 11.1422 7.77532 10.992 7.83751C10.8419 7.8997 10.681 7.93171 10.5185 7.93171C10.356 7.93171 10.1951 7.8997 10.0449 7.83751C9.89482 7.77532 9.7584 7.68418 9.6435 7.56927L7.42683 5.3526C7.31192 5.2377 7.22077 5.10128 7.15859 4.95115C7.0964 4.80102 7.06439 4.6401 7.06439 4.4776C7.06439 4.3151 7.0964 4.15419 7.15859 4.00406C7.22077 3.85392 7.31192 3.71751 7.42683 3.6026C7.54174 3.4877 7.67815 3.39655 7.82828 3.33436C7.97842 3.27217 8.13933 3.24017 8.30183 3.24017C8.46433 3.24017 8.62524 3.27217 8.77538 3.33436C8.92551 3.39655 9.06192 3.4877 9.17683 3.6026L9.41016 3.83594Z" stroke="#14171B" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <SketchPicker
            color={selectedColor}
            onChangeComplete={handleChangeComplete}
            disableAlpha
          />
        </div>
      )}
    </div>
  );
};

export default CustomColorDropdown;
