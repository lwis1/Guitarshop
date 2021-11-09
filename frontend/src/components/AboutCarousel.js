import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const AboutCarousel = () => {
    const images = [
      {
        original: "about.jpg",
        thumbnail: "about.jpg",
        description: ""
      },
      {
        original: "rare.jpg",
        thumbnail: "rare.jpg",
        originalHeight :"100%"
      },
      {
        original: "./acoust.jpg",
        thumbnail: "./acoust.jpg",
        originalHeight :"100%"
      },
      {
        original: "./bass.jpg",
        thumbnail: "./bass.jpg",
        originalHeight :"100%"
      },
      {
        original: "about.jpg",
        thumbnail: "about.jpg",
        description: ""
      },
      {
        original: "rare.jpg",
        thumbnail: "rare.jpg",
        originalHeight :"100%"
      },
      {
        original: "./acoust.jpg",
        thumbnail: "./acoust.jpg",
        originalHeight :"100%"
      },
      {
        original: "./bass.jpg",
        thumbnail: "./bass.jpg",
        originalHeight :"100%"
      },
      {
        original: "about.jpg",
        thumbnail: "about.jpg",
        description: ""
      },
      {
        original: "rare.jpg",
        thumbnail: "rare.jpg",
        originalHeight :"100%"
      },
      {
        original: "./acoust.jpg",
        thumbnail: "./acoust.jpg",
        originalHeight :"100%"
      },
      {
        original: "./bass.jpg",
        thumbnail: "./bass.jpg",
        originalHeight :"100%"
      },
    ];

    return (
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        autoPlay={true}
        showFullscreenButton={false}
      />
    );
}

export default AboutCarousel
