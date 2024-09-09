import React, { useState } from 'react';
import styles from './App.module.css';
import UploadForm from './components/UploadForm/UploadForm';
import GalleryRow from './components/GalleryRow/GalleryRow';

function App() {

  const [files, setFiles] = useState([]); // state to hold uploaded files

  const handleNewUpload = (file) => {
    setFiles([...files, file]);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <a target='_blank' href='https://www.instagram.com/ascendusc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>Ascend Marketing Material</a>
      </div>
      <UploadForm handleNewUpload={handleNewUpload}/>
      <GalleryRow files={files}/>
    </div>
  );
}

export default App;
