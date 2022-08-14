
import './Animate.scss'
const AnimatedLetters = ({letterClass,strArray,idx}) => {
    return(
        <span  className='my-[15px] text-[#ccd6f6] font-bold md:text-7xl text-5xl font-name'>
            {strArray.map((char,i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters