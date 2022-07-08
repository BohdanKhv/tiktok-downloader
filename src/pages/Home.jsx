import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoIcon } from '../assets/icons/icons';
import { getVideo } from '../features/video/videoSlice';
import { Footer, Input, Result } from '../components';

const Home = () => {
    const dispatch = useDispatch();
    const { isError } = useSelector(state => state.video);
    const [err, setErr] = useState('');
    const [search, setSearch] = useState('');

    return (
        <>
        <div 
            className="px-1 text-center relative overflow-hidden"
        >
            <div
                className="filter-shadow z-0"
                style={{
                    width: '400px',
                    height: '400px',
                    top: '-200px',
                    left: '-200px',
                    position: 'absolute',
                    filter: 'drop-shadow(var(--box-shadow-hover)  contrast(0.5))',
                }}
            >
                {logoIcon}
            </div>
            <div
                className="filter-shadow z-0"
                style={{
                    width: '400px',
                    height: '400px',
                    bottom: '-200px',
                    right: '-200px',
                    position: 'absolute',
                    filter: 'drop-shadow(var(--box-shadow-hover)  contrast(0.5))',
                }}
            >
                {logoIcon}
            </div>
            {/* <div className="mx-w-sm mx-auto h-screen flex flex-col justify-center"> */}
            <div className="mx-w-sm mx-auto flex flex-col z-1 relative">
                <h1 className="title-1 mt-1 filter-shadow">
                    TikTok Downloader
                </h1>
                <h4 className="title-3">
                    Download with or without watermark
                </h4>
                <div className="mt-2 flex">
                    <Input
                        style={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        }}
                        className="flex-grow"
                        placeholder="Paste the URL here"
                        label="Video URL"
                        value={search}
                        onChange={(e) => {setSearch(e.target.value); setErr('')}}
                        onKeyDown={
                        (e) =>  {
                            if(e.key === 'Enter') {
                                if(!search.includes('video/')) {
                                    setErr('This URL is not supported.')
                                } else {
                                    dispatch(getVideo(search))
                                }
                            }
                        }}
                    />
                    <div className="btn btn-primary"
                        style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                        onClick={
                        () => {
                            if(!search.includes('video/')) {
                                setErr('This URL is not supported.')
                            } else {
                                dispatch(getVideo(search))
                            }
                        }}
                    >
                        Download
                    </div>
                </div>
                <div className="mt-2 text-center">
                    {err && err}
                </div>
                <Result/>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Home