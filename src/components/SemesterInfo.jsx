import { useState } from "react";
import CaretRight from '../assets/caret-right.svg?react'
import CaretDown from '../assets/caret-down.svg?react'
import { ReactSVG } from "react-svg";

const SemesterInfo = ({semesterName, courses}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="px-[15%] py-[1%]">
            {/* Button */}
            <div className="w-full flex bg-[#1F3B4D] px-[2%] py-3">
                <button type="button" className="group btn hover:cursor-grab font-serif text-white text-left w-full flex flex-column items-center" onClick={handleButtonClick}>
                    <h3 className="font-serif group-hover:text-sky-300 text-white w-full">{semesterName}</h3>
                    {!isOpen ? <CaretRight className="w-5 h-5 group-hover:text-sky-300" /> : <CaretDown className="w-5 h-5 group-hover:text-sky-300" /> }
                    
                </button>
            </div>

            {/* Contents */}
            <div className="bg-gray-300 font-serif text-[#1F3B4D]">
                {isOpen ? (
                    <div className="px-[2%] py-5">
                        {courses}
                    </div>
                ): (
                    <p></p>
                )}
            </div>
        </div>
    )
}

export default SemesterInfo
