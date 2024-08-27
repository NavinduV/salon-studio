import { useState } from 'react';
import { galleryData } from './data';
import { fadeIn } from './variants';
import  PhotoAlbum  from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';


const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const { images } = galleryData;

  return (
    <section
      id="gallery"
      className="section w-11/12 mx-auto relative mt-[2.5rem] lg:mt-0"
    >
      <div className="container mx-auto pt-5">
        <motion.h2
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={'show'}
          className="h2 xl:text-[70px] max-w-full lg:mb-5 pt-6"
        >
          Check my gallery:
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 top-[-100px] lg:mb-20"
      >
        <PhotoAlbum
          onClick={(event, photo, index) => setIndex(index)}
          layout="rows"
          photos={images}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: 'rgba(0,0,0, .9' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
    </section>
  );
}
