const backgroundImages = [
    "/assets/sunnyday.png",
    "/assets/clearnight.png",
    "/assets/partlycloudyday.png",
    "/assets/partlycloudynight.png",
    "/assets/cloudyday.png",
    "/assets/cloudynight.png",
    "/assets/rainyday.png",
    "/assets/rainynight.png",
    "/assets/snowyday.png",
    "/assets/snowynight.png",
    "/assets/thunderday.png",
    "/assets/thundernight.png",
    "/assets/fogday.png",
    "/assets/fognight.png",
    "/assets/rainthunderday.png",
    "/assets/rainthundernight.png",
    "/assets/snowthunderday.png",
    "/assets/snowthundernight.png",
  ];
  export const preLoadImages=()=>{
    backgroundImages.forEach((src)=>{
        const image = new Image()
        image.src = src
    })
  }