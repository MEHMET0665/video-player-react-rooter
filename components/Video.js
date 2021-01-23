import React from 'react';
const VIDEOS = {
  fast: "https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Equestrian_04_Videvo_preview.webm",
  slow: "https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm",
  cute: "https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/gatos__preview.webm",
  eek: "https://cdn.videvo.net/videvo_files/video/free/2014-04/small_watermarked/Albino_Snake_CCBY_NatureClip_preview.webm"
};​
class Video extends React.Component {
  render() {
    // console.log(this.props.match.url) // Route sends match property which contains URL
    let url = VIDEOS.eek
      url= this.props.match.url.split('/')  // Since URL comes "/"
      console.log(url)
    return (
      <video  src={VIDEOS[url[1]]}autoPlay></video>
    )
  }
}
export default Video