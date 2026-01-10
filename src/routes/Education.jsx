import SemesterInfo from "../components/SemesterInfo"

import { semesterInfo } from "../contents/Education"

const Education = () => {
  return (
    <div className='min-h-screen py-40 w-full'>
      <br />
      <h1 className="text-white text-3xl font-serif px-[15%]">
        Coursework from UC Berkeley:
      </h1>

      {semesterInfo.map((semester) => (
        <SemesterInfo
          semesterName={semester.semesterName}
          courses={semester.courses}
        />
      ))}
    </div>
  )
}

export default Education
