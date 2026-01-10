import { useState } from "react";

const SemesterInfo = ({semesterName, courses}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="px-[15%] py-[1%]">
            {/* Button */}
            <div className="w-full flex bg-[#1F3B4D] px-[3%] py-3">
                <button type="button" className="btn hover:cursor-grab font-serif text-white w-full text-left" onClick={handleButtonClick}>
                    <h3 className="font-serif text-white">{semesterName}</h3>
                </button>
            </div>

            {/* Contents */}
            <div className="bg-gray-300 font-serif text-[#1F3B4D]">
                {isOpen ? (
                    <div className="px-[3%] py-5">
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
