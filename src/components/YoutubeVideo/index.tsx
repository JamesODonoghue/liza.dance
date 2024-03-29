import React, { useEffect, MouseEvent, useState } from "react"
import "./styles.css"
export interface IVideoProps {
    embedLink: string
}

const videos = [
    "woRRcl5-7mo?",
    "761Ah9h4U-o?",
    "Zcmved0uM_E?start=1481&",
    "NKEFrH_wTEo?",
    "OJItiWIscSA?",
    "t7khV6OqL6Q?",
    "kSUXULbY3Jc?",
    "bdjq-_6Mvvw?",
]

export const VideoList = () => (
    <div className="wrapper">
        {videos.map((link) => YoutubeVideo({ embedLink: link }))}
    </div>
)
export const YoutubeVideo = ({ embedLink }: IVideoProps) => {
    const [imgSrc, setImgSrc] = useState("")
    const [frameSrc, setFrameSrc] = useState("")
    const [selected, setSelected] = useState(false)

    const handleClick = (e: MouseEvent) => {
        setSelected(true)
        buildIFrame()
    }

    const buildIFrame = () => {
        setFrameSrc(
            `https://www.youtube.com/embed/${embedLink}rel=0&showinfo=0&autoplay=1`
        )
    }
    useEffect(() => {
        setImgSrc(
            `https://img.youtube.com/vi/${
                embedLink.split("?")[0]
            }/sddefault.jpg`
        )
    }, [embedLink])
    return (
        <div className="youtube" data-embed={embedLink} onClick={handleClick}>
            {selected ? (
                <iframe
                    key={embedLink}
                    title={embedLink}
                    frameBorder="0"
                    allowFullScreen={true}
                    src={frameSrc}
                ></iframe>
            ) : (
                <div>
                    <div className="play-button"></div>
                    <img src={imgSrc} alt="Dance Video"></img>
                </div>
            )}
        </div>
    )
}
