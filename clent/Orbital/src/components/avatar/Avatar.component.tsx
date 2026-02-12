import "./Avatar.styles.css";

const Avatar: React.FC<{ avatar?: string }> = ({ avatar }) => {
  return (
    <>
        <img className="avatar" src = {avatar || "https://www.w3schools.com/howto/img_avatar.png"} alt="Avatar" />
    </>
  )
}

export default Avatar;