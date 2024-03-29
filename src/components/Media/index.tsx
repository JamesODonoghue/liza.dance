import React from "react"
import { VideoList } from "../YoutubeVideo"
import "./styles.css"

export const Media = () => (
    <section>
        <div className="main-content__header">
            <h1>Media</h1>
        </div>
        <div className="main-content__body">
            <VideoList></VideoList>
        </div>
    </section>
)
