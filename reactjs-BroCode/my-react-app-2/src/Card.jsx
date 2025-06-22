import profilePic from './assets/pinkypie.jpg'


function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Diaz Amantajati</h2>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export default Card