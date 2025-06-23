import imageurl from './assets/pinkypie.jpg'

function ProfilePicture() {

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageurl} alt="Tes" />
)
}

export default ProfilePicture