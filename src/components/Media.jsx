import './Media.css'

import ReactPlayer from 'react-player'

export const Media = ({ url, width, height, name, mute, loop = true, play = true }) => {
    return (
        <>
            <div className={name}>
                <ReactPlayer className='react-player' width={width} height={height} url={url} muted={mute} playing={play} loop={loop} />
            </div>
            {mute ?
                (<a className='ref' href='https://goo.gl/maps/U5Mi9UHZ9VS7zd2w5' target='_blank'></a>)
                :
                null
            }
        </>
    )
}
