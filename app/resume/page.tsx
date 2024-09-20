import React, {useRef} from "react";
import styles from './resumecss.module.css';

export default function App() {

    return (
        <div className="flex w-full justify-center items-center">
            <iframe src="https://drive.google.com/file/d/13AOwOcLn8XPb04xonhDM8cpmWapor-TM/preview" title='resume' className={styles.pdfStyle} allow="autoplay"></iframe>
        </div>
    );
}
