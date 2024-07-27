import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ColorPickerProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onColorSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const togglePicker = () => setIsOpen(!isOpen);

  const handleChangeComplete = (color: any) => {
    onColorSelect(color.hex);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={pickerRef} className="relative w-full">
      <button
        onClick={togglePicker}
        className="flex items-center justify-between border rounded-lg p-2"
        style={{ backgroundColor: selectedColor || "#f0f0f0" }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: selectedColor || "#f0f0f0",
            borderRadius: "3px",
            border: "1px solid #ccc",
          }}
        />
        <span className="ml-2 text-sm">{selectedColor || "Select Color"}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
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

export default ColorPicker;
