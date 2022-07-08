import { arrowIcon } from '../../assets/icons/icons'
import './styles/Card.css'

const Card = ({children, title, className, titleStyle, isOpen, setIsOpen}) => {
    return (
        <div className={`card ${className ? className : ''}`}>
            <div 
                style={titleStyle}
                className="card-title flex align-between"
                onClick={() => setIsOpen ? setIsOpen(!isOpen) : null}
            >
                <h3 className="title-3 flex-grow">
                    {title}
                </h3>
                <div className={`open-icon${isOpen ? ' open' : ''}`} style={{width: '25px', height: '25px'}}>
                    {arrowIcon}
                </div>
            </div>
            <div className={`card-body${isOpen ? ' open' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Card