import React, { useState, useRef } from 'react';
import styles from './UploadForm.module.css';

const UploadForm = ({ handleNewUpload }) => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null); // useRef stores a persistent value that survives across re-renders BUT doesn't trigger re-renders

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // gets the first uploaded file
    }

    const handleUpload = () => {
        if(file) {
            handleNewUpload(file); // passes file to parent
            setFile(null); // clear file input after upload
        }
        else {
            alert('Choose a file')
        }
    }

    const handleClear = () => {
        setFile(null);
        fileInputRef.current.value = "";
    }

    return (
        <div className={styles.parent}>
            <input ref={fileInputRef} type='file' accept='.png, .jpg, .jpeg, .pdf' onChange={handleFileChange}></input>
            <button className={styles.button} onClick={handleUpload}>Upload</button>            
            <button className={styles.button} onClick={handleClear}>Clear</button>
        </div>
    );
}

export default UploadForm;