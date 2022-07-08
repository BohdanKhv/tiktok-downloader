import { useSelector } from "react-redux/es/exports"
import { Skeleton, Avatar } from '../'
import { downloadIcon } from "../../assets/icons/icons"
import './styles/Result.css'


const Result = () => {
  const { isLoading, video } = useSelector(state => state.video)

  return (
    <div>
      {isLoading ? 
        <Skeleton
          height={500}
          animation="wave"
          className="bg-main filter-shadow border-r mt-1 mb-1"
        />
      : video &&
        <>
          <div className="bg-main filter-shadow border-r overflow-hidden mt-1 mb-1 item-anim">
            <div className="flex p-3 gap-1 justify-between video-playback relative">
              <div className="video item-anim border-r overflow-hidden"
                style={{
                  backgroundImage: `url(${video.dynamic})`
                }}>
                <video controls src={video.no_watermark} muted autoPlay loop />
              </div>
              <div className="flex flex-col flex-grow gap-1 justify-between">
                <div className="flex flex-col justify-center align-center">
                  <Avatar
                    image={video?.avatar}
                    name={video?.author}
                    size='lg'
                  />
                  <p className="fs-4 text-left pt-2">
                    {video?.author}
                  </p>
                  <p>
                    {video?.tags.join(', ')}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div 
                    className="btn btn-primary no-shadow"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = video.with_watermark
                      link.target = '_blank'
                      link.download = video.id+'.mp4'
                      link.click()
                    }}
                  >
                    {downloadIcon}
                    With Watermark
                  </div>
                  <div 
                    className="btn btn-primary no-shadow"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = video.no_watermark
                      link.target = '_blank'
                      link.download = video.id+'.mp4'
                      link.click()
                    }}
                  >
                    {downloadIcon}
                    Without Watermark
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
    )
}

export default Result