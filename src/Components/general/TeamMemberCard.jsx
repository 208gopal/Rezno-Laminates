import React from 'react'

function TeamMemberCard({ memberImage, memberName="John Doe", memberRole="employee" }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
      <img
        src={memberImage}
        alt={memberName}
        className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] object-cover object-center rounded-lg shadow-lg"
      />
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-right">
        {memberName}
      </h3>
      <h4 className='text-sm sm:text-base lg:text-lg font-medium text-right'>{memberRole}</h4>
    </div>
  )
}

export default TeamMemberCard