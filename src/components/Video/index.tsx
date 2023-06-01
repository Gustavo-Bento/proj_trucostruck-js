import Video1 from '../../assets/video.mp4'

function Video() {
    return (
        <div>
            <div className="w3-padding-32" id='video'>
            <h3 className="w3-center w3-padding-32">VIDEO INSTITUCIONAL</h3>
                <video autoPlay loop style={{ maxWidth: '1600px', minWidth: '500px' }}>
                    <source src={Video1} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Video