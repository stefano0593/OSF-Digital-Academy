import React from 'react'

function Youtube() {
    return (
        <>
            <h1>Youtube Page</h1>
            <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/5bt7kAVxKfs?si=8IBD3Ai79aqW1Ncu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </>
    )
}

export default Youtube
