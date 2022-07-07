import React from 'react';
import { FaFolderOpen, FaFileAlt, FaHistory } from 'react-icons/fa';

function Html5Icons(props) {
  return (
    <>
      {(() => {
        switch (props.iconType) {
          case 'source':
            return <FaFolderOpen className='fa-icon' size={25} />;
          case 'archive':
            return <FaHistory className='fa-icon' size={20} />;
          default:
            return null;
        }
      })()}
    </>
  )
}

export default Html5Icons;
