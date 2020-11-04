// https://www.googleapis.com/youtube/v3/search/?key=AIzaSyCDe8qzhcI675Bg_2bbjR_V0Le7YuYuSvU&part=snippet&q=youtu.be/M7lc1UVf-VE
// https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=AIzaSyCDe8qzhcI675Bg_2bbjR_V0Le7YuYuSvU

export const getVideoId = url => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
}