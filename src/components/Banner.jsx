import Lottie from 'lottie-react';
import banner from '../assets/banner4.mp4'
import resumi from '../assets/resume.json'
import { Tooltip } from 'react-tooltip'
import { saveAs } from 'file-saver';
const Banner = () => {
    const handleDownload = () => {
        // Replace 'path_to_your_pdf_file' with the actual path to your PDF file
        const pdfFile = 'path_to_your_pdf_file';
        saveAs(pdfFile, 'resume.pdf');
      };

    return (
       <>
        <div className=''>
            <video src={banner}  autoPlay  muted></video>
        </div>
        {/* Banner  Content  */}
        <div className='absolute top-[370px] right-[410px]'>
            {/* <button className='btn btn-outline '>Download resume</button> */}
            <a className="my-anchor-element">
            <Lottie onClick={handleDownload} className=' w-72 h-72 cursor-pointer'  animationData={resumi} loop={true} />
            </a>
            <Tooltip anchorSelect=".my-anchor-element" place="top">
                Download Resume
            </Tooltip>
        </div>
       </>
    );
};

export default Banner;