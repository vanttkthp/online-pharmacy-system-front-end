import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './styled.css'
import { Link } from 'react-router-dom';

const IconCancelComponent = () => {
  return (
    <div className='icon-cancel-ctn'>
        <div></div>
        <Link to="/">
            <FontAwesomeIcon icon={faXmark} className='icon-cancel'/>
        </Link>
    </div>
  )
}

export default IconCancelComponent