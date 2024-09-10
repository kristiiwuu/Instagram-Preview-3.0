import React, {useState, useEffect} from 'react';
import styles from './GalleryRow.module.css';
// import Axios from "axios"; // used to send & receive requests from backend

const GalleryRow = ({ files }) => {  
    // const [data, setData] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/uploads.json')
        .then(response => response.json())
        .then(data => setImages(data))
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

// const getData = async() => { // request data from backend using Axois
//     const response = await Axios.get("http://localhost:5000/getData");
//     setData(response.data);
// };

// useEffect(() => { // renders once, when component is mounted
//     getData();
//   },);


{/* {files.map( (file, index) => {
    return (
        <img 
            className = {styles.file}
            key = {index}
            src = {URL.createObjectURL(file)}
        />
    )
})} */}
{/* {data.map( (fileName, index) => {
    return ( 
        <img 
            src={`/uploads/${fileName}`}
            key={index}
            className={styles.file}
        /> 
    );
})} */}