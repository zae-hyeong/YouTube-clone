const commentScripts = () => {
  const $commentForm = document.getElementById('comment-form');
  
  const $commentInput = document.getElementById('comment-input');
  const $submitButton = document.getElementById('upload-comment');
  
  const $commentList = document.getElementById('comment-list');
  
  (function activeCommentSubmitButton() {
    $commentInput.addEventListener('input', () => {
      if( $commentInput.value ) {
        $submitButton.disabled = false;
      } else {
        $submitButton.disabled = true;
      }
    });
  })();
  
  (function submitComment() {
    (function handleSubmit() {
      $commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const commentValue = $commentInput.value;
        if(!commentValue) { return };

        const commentElement = returnCommentHTML('@anonymousUser', commentValue);
        $commentList.insertAdjacentHTML("afterbegin", commentElement);
        $commentInput.value = null;
      });
    })();
  
    function returnCommentHTML(userId, commentValue, numOfLike = 0, uploadBefore = '0초 전') {
      return `
        <li class="comment">
          <a href="#"><img src="./images/unnamed-user-icon.jpg" alt="댓글 유저 이미지" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px;"></a>
          <div class="comment-content-wrapper">
            <div class="comment-uploader-and-date-before">
              <a href="#"><span class="comment-uploader">${userId}</span></a>
              <span class="comment-date-before">${uploadBefore}</span>
            </div>
            <div class="comment-content">
              <p>${commentValue}</p>
            </div>
            <div class="comment-functions">
              <button class="comment-like">
                <img src="./images/buttons/like.png" alt="댓글 좋아요 버튼">
                <span class="comment-num-of-like">${numOfLike}</span>
              </button>
              <button class="comment-dislike">
                <img src="./images/buttons/dislike.png" alt="댓글 싫어요 버튼">
              </button>
              <button class="post-reply-comment">답글</button>
            </div>
          </div>
          <div class="comment-more-wrapper">
            <div class="comment-more">
              <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
            </div>
          </div>
      </li>
      `;
    }
  })();
}
commentScripts();

const addAsideVideos = () => {
  class AsideVideo {
    constructor(title, thumbnail, uploader, views, uploadBefore){
      this.title = title;
      this.thumbnail = thumbnail;
      this.uploader = uploader;
      this.views = views;
      this.uploadBefore = uploadBefore;
    }
  }

  const $asideVideoList = document.getElementById('aside-items-list');

  (function addVideoItems() {
    const videoElement = returnAsideVideoItemElement(new AsideVideo(
      'LE SSERAFIM (르세라핌) \'Impurities\' OFFICIAL M/V',
      './images/dummyThumbnailImg.jpg',
      'HYBE LABELS',
      '2426만',
      '9개월'
    ));
    for(let i = 0; i < 20; i++) {
      $asideVideoList.insertAdjacentHTML("afterend", videoElement);
    }
  })();

  function returnAsideVideoItemElement(video) {
    return `
      <li class="aside-video-item">
        <a href="#">
          <img class="aside-video-thumbnail" src="${video.thumbnail}" alt="썸네일 이미지">
          <div class="aside-video-info">
            <span class="aside-video-title">${video.title}</span>
            <div class="aside-video-detail">
              <div class="aside-video-uploader">${video.uploader}</div>
              <div class="video-meta-data">
                <span class="views">조회수 ${video.views}회</span>
                <span class="upload-before">${video.uploadBefore} 전</span></div>
            </div>
          </div>
          <div class="video-more-wrapper">
            <div class="video-more">
              <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
            </div>
        </a>
      </li>
    `;
  }
}
addAsideVideos();