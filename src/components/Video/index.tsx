import Video1 from '../../assets/video.mp4'

function Video(){
    return(
        <div id='video'>
            <h3 className="w3-center w3-padding-32">VIDEO INSTITUCIONAL</h3>
            <video style={{ maxWidth: '1600px', minWidth: '500px' }} autoPlay loop>
                <source src={Video1} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video