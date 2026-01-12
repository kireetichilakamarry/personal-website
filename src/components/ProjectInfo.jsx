import { useState } from "react";

import githubLogo from '../assets/darkGithub.svg'
import CaretRight from '../assets/caret-right.svg?react'
import CaretDown from '../assets/caret-down.svg?react'

const ProjectInfo = ({projectType, projects}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="px-[15%] py-[1%]">
            {/* Button */}
            <div className="w-full flex bg-[#1F3B4D] px-[2%] py-[1%]">
                <button type="button" className="group btn hover:cursor-grab font-serif text-white text-xl w-full text-left flex flex-column items-center" onClick={handleButtonClick}>
                    <h3 className="font-serif text-white group-hover:text-sky-300 w-full">{projectType}</h3>
                    {!isOpen ? <CaretRight className="w-5 h-5 group-hover:text-sky-300" /> : <CaretDown className="w-5 h-5 group-hover:text-sky-300" /> }
                </button>
            </div>

            {/* Contents */}
            {isOpen ? (
                projects.map((project) => (
                    <div className="bg-gray-300 font-serif text-[#1F3B4D] p-[2%] mt-2 mb-2 w-full">
                        <p className="text-xl underline">
                            {project.projectName}
                        </p>
                        {project.description}
                        <br />
                        {project.publicRepo ? (
                            <a target="_blank" href={project.githubLink}> 
                                <img className="hover: cursor-grab" src={githubLogo} alt="Github" />
                            </a>
                        ): (
                            <a className="underline hover: cursor-grab" href="">Spec Link</a>
                        )}
                    </div>
                ))
            ): (
                <p></p>
            )}
        </div>
    )
}

export default ProjectInfo
