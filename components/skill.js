import { useState } from "react";

const SkillBarSegment = (props) => {
  return (
    <div className={`${props.bgColor ? props.bgColor : bg-white} h-5 border-y-4 border-x-2 border-blue-100`}></div>
  )
}

export const Skill = (props) => {
  let skillBar = [];

  if (props.rating) {
    for (let i = 1; i <= props.rating; i++) {
      const newSegment = <SkillBarSegment bgColor="bg-blue-400" />

      skillBar.push(newSegment);
    }
  }

  return (
    <div className="grid grid-cols-10 w-2/6 rounded">
      {skillBar}
    </div>
  )

}