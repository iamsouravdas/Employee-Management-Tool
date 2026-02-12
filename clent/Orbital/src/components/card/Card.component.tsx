import type React from "react"
import type { CardProps } from "./Card.types"


const Card: React.FC<CardProps> = ({ title, customClassName, data }) => {
  return (
    <>
      <div className={customClassName}>
        <h3>{title}</h3>
        {data}
      </div>
    </>
  )
}

export default Card