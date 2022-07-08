import axios from 'axios';

const getVideo = async (url) => {
    let id = (url.split('/video/')[1] + '?').split('?')[0];
    const base = '/aweme/v1/aweme/detail/?aweme_id=';

    const response = await axios.get(base+id);

    const data = {
        no_watermark: response.data.aweme_detail.video.play_addr.url_list[0],         // required
        no_watermark_2: response.data.aweme_detail.video.play_addr.url_list[1],       // required
        no_watermark_3: response.data.aweme_detail.video.play_addr.url_list[2],       // required
        with_watermark: response.data.aweme_detail.video.download_addr.url_list[0],   // required
        dynamic: response.data.aweme_detail.video.dynamic_cover.url_list[0],          // required
        cover: response.data.aweme_detail.video.origin_cover.url_list[0],             // required
        author: response.data.aweme_detail.author.nickname,                           // required
        avatar: response.data.aweme_detail.author.avatar_168x168.url_list[0],         // required
        tags: response.data.aweme_detail?.text_extra?.map(t => t.hashtag_name),
        id: id,
        musicCover: response.data.aweme_detail.music.cover_large.url_list[0],
        musicTitle: response.data.aweme_detail.music.title,
        musicAlbum: response.data.aweme_detail.music.album,
        musicAuthor: response.data.aweme_detail.music.author,
    }

    return data;
}


const videoService = {
    getVideo,
}

export default videoService;