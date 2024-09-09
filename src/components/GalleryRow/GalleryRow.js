import React, {useState, useEffect} from 'react';
import styles from './GalleryRow.module.css';

const GalleryRow = ({ files }) => {  
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/uploads.json')
        .then(response => response.json())
        .then(data=> setImages(data))
        // .catch(error = alert('Error fetching JSON'))
    }, []);

    return ( 
        <div className={styles.parent}> 
                {/* Temp Files */}
                {files.map( (file, index) => {
                    return (
                        <img 
                            className={styles.temp}
                            key={index}
                            src={URL.createObjectURL(file)}
                        />
                    )
                })}
                {/* Permanent Files */}
                {images.map( (fileName, index) => {
                    const file_name = `/uploads/${fileName}`;
                    return (
                        <img 
                            className={styles.file}
                            key={index}
                            src={file_name}
                        />
                    )
                })}
        </div>
    );
};

export default GalleryRow;

// MISC
/* useEffect(() => { // cleans up URLs when component unmounts or file changes
        return () => {
            files.forEach(file => {
                URL.revokeObjectURL(URL.createObjectURL(file));
            })
        };
    }, [files]); 
*/

/* {files.map( (file, index) => {
    const fileURL = URL.createObjectURL(file);
    return ( 
        <img 
            className={styles.file}
            key={index}
            src={fileURL} // temporary URL for the file
        />
    )
})} */
