import React from 'react'
import pkg from 'file-saver';
import arrow from "../media/images/DownloadArrow.svg"
import folder from "../media/images/DownloadFolder.svg"
const DownloadButton = ({link}) => {
  const { saveAs } = pkg;
  const downloader = (link) => {
    saveAs(link)
  }
  return (
    <div className='download_button' onClick={() => downloader(link)}>
      <img src={arrow} alt="flecha de descarga" className='download_button__Arrow '/>
      <img src={folder} alt="carpeta de descarga" className='download_button__Folder '/>
    </div>
  )
}

export default DownloadButton