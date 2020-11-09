import React, { useState, useCallback } from 'react';
import styles from './myCreatives.module.scss';
import { withContentHeader } from '../../../Hoc/withContentHeader';
import Gallery from 'react-photo-gallery';
// import Carousel, { Modal, ModalGateway } from 'react-images';

const MyCreatives = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery
        styled={{ border: '1px solid red' }}
        photos={data}
        onClick={openLightbox}
      />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={data.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     {data.map(e => (
  //       <WorkItem item={e} />
  //     ))}
  //   </div>
  // );
};

export default withContentHeader(MyCreatives);
