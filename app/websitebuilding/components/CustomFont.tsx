import { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface CustomDropdownProps {
    selectedFont: string;
    onSelectFont: (font: string) => void;
  }
  
  const CustomDropdown: React.FC<CustomDropdownProps> = ({
    selectedFont,
    onSelectFont,
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const fontOptions = [
      "Albert Sans",
      "Bricolage",
      "Grotesque",
      "Inter",
      "Montserrat",
      "Poppins",
      "Open Sans",
    ];
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleSelect = (font: string) => {
      onSelectFont(font);
      setIsOpen(false);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, fontOptions.length - 1)
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prev) =>
          prev === null ? 0 : Math.max(prev - 1, 0)
        );
      } else if (e.key === "Enter" && highlightedIndex !== null) {
        handleSelect(fontOptions[highlightedIndex]);
      }
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
        className="relative text-[12px] w-full max-w-[109.5px]"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <button
          onClick={toggleDropdown}
          className="flex  text-[12px] items-center justify-between w-full border rounded-lg p-2 bg-white text-gray-700"
          style={{ fontFamily: selectedFont || "Arial" }}
        >
          <span className=" text-[12px]">{selectedFont || "Select a Font"}</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul className="p-2">
              {fontOptions.map((font, index) => (
                <li
                  key={font}
                  className={`p-2 cursor-pointer ${
                    highlightedIndex === index ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleSelect(font)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {font}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  export default CustomDropdown;