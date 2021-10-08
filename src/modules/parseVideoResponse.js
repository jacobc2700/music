const parseVideoResponse = (response) => {
  let items = response.data.items;

  //make a json object with the fields in it
  //   console.log(items);

  let objects = [];

  for (var i = 0; i < items.length; i++) {
    let object = {
      video_id: items[i].id.videoId,
      channel_title: items[i].snippet.channelTitle,
      video_title: items[i].snippet.title,
      //   thumbnail_img: items[i].thumbnails.default.url,
    };
    objects.push(object);
  }

  return objects;
};

export default parseVideoResponse;
