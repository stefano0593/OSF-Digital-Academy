import React from 'react'
import {renderWithProviders} from '../../utils/test-utils'
import Youtube from './index'

test('Youtube component renders with the correct video URL', () => {
    const {getByTitle} = renderWithProviders(<Youtube />)
    const videoPlayer = getByTitle('OSF')
    expect(videoPlayer).toBeInTheDocument()
    expect(videoPlayer).toHaveAttribute(
        'src',
        'https://www.youtube.com/embed/5bt7kAVxKfs?si=8IBD3Ai79aqW1Ncu'
    )
})

test('Youtube component renders an iframe element', () => {
    const {container} = renderWithProviders(<Youtube />)
    const iframeElement = container.querySelector('iframe')
    expect(iframeElement).toBeInTheDocument()
})
