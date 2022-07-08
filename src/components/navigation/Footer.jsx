import { useState } from 'react'
import { Card } from '../'

const Footer = () => {
    const [faq1, setFaq1] = useState(false)
    const [faq2, setFaq2] = useState(false)
    const [faq3, setFaq3] = useState(false)
    const [faq4, setFaq4] = useState(false)
    const [faq5, setFaq5] = useState(false)
    const [faq6, setFaq6] = useState(false)

    return (
        <>
        <div className="mt-1 mb-1">
            <div className="bg-main filter-shadow border-r">
                <div className="title-2 p-1">
                    How to use?
                </div>
                <p className="border-top p-1">
                    <strong>1</strong><br/> Open TikTok application or website, copy the URL of the video.
                </p>
                <p className="p-1">
                    <strong>2</strong><br/> Paste the URL in the input field and click the download button.
                </p>
                <p className="p-1">
                    <strong>3</strong><br/> The result will be shown. You will get options to download the video with or without watermark.
                </p>
            </div>
        </div>
        <div className="bg-main filter-shadow border-r mb-1">
            <div className="title-2 p-1">
                Frequently asked questions (FAQ)
            </div>
            <p className="border-top p-1">
                The purpose of this FAQ is generally to provide information on frequent questions or concerns about ttd.me downloader.
            </p>
            <div className="pt-2 pb-1">
            <Card title="What is an TikTok Video Downloader?" isOpen={faq1} setIsOpen={setFaq1}>
                It’s an online tool (web application) that enables you to download TikTok videos. In case you need to use it later offline. The ttd.me downloader is the best tool for downloading from TikTok.
            </Card>
            <Card title="What type of file formats does ttd support for downloading?" isOpen={faq2} setIsOpen={setFaq2}>
                For the videos, the mp4 file format is still considered to be most popular in the world, that ensures high quality and small video file size.
            </Card>
            <Card title="What devices are compatible with the ttd Downloader?" isOpen={faq3} setIsOpen={setFaq3}>
                The iGram ttd is compatible with any device with an installed browser. You can use iGram from any device like mobile phone, smartphone, tablet, notebook, laptop, or PC. Also, it’s run on Mac OS, Windows, iOS, Linux. It has been tested and it works well with browsers like Chrome, Firefox, Opera, Safari, Chromium, desktop, and mobile versions.
            </Card>
            <Card title="Are there any limits on the number of videos I can download?" isOpen={faq4} setIsOpen={setFaq4}>
                No! You can download as many videos as you wish.
            </Card>
            <Card title="How to Download TikTok Videos Online?" isOpen={faq5} setIsOpen={setFaq5}>
                Nothing easier!
                Copy an TikTok video URL
                Go back to ttd and paste it into the field and press Download
                Shortly, you will get options to download the video with or without watermark.
            </Card>
            <Card title="Can I Download Photos & Videos from Any User?" isOpen={faq6} setIsOpen={setFaq6}>
            Yes! But only from public accounts. We respect the user’s privacy/copyright. Downloading private videos through ttd is not available and will not be.
            </Card>
            </div>
        </div>
        </>
    )
}

export default Footer