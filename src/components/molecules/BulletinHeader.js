import React from 'react'
import './BulletinHeader.scss'

const BulletinHeader = ({title, description}) => {
  return(
    <div className="justify-content-between align-items-center border-bottom Bulletin-header">
      <h3 className="Bulletin-title text-primary">{title}</h3>
      <h6 className="Bulletin-desc">{description}</h6>
    </div>
  )
};

export default BulletinHeader;