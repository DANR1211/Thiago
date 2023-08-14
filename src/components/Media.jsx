import './Media.css'

import ReactPlayer from 'react-player'

export const Media = ({ url, width, height, name, mute, loop = true, play = true }) => {
    return (
        <>
            <div className={name}>
                <ReactPlayer className='react-player' width={width} height={height} url={url} muted={mute} playing={play} loop={loop} />
            </div>
            {mute ?
                (<a className='ref' href='https://goo.gl/maps/Nxsh3DVCJC2USRPt9' target='_blank'></a>)
                :
                null
            }
        </>
    )
}
