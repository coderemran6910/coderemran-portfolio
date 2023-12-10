import banner from '../assets/banner4.mp4'
const Banner = () => {
    return (
        <div>
            <video src={banner}  autoPlay  muted></video>
        </div>
    );
};

export default Banner;