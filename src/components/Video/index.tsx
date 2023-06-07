import Video1 from '../../assets/video.mp4'

function Video() {
    return (
        <div className="w3-display-container w3-center">
            <div className="w3-padding-32" id='video'>
            <h3 className="w3-center w3-padding-32">VIDEO INSTITUCIONAL</h3>
                <video autoPlay loop style={{ maxWidth: '2000px', minWidth: 'auto' }}>
                    <source src={Video1} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Video