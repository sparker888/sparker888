"use client";

import React, { useEffect, useState } from 'react';
import Carousel from '../../../components/Carousel'; // Adjusted path
import cloudinary from '../../../utils/cloudinary'; // Adjusted path
import getBase64ImageUrl from '../../../utils/generateBlurPlaceholder'; // Adjusted path

const PhotoPage = () => {
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const photoId = /* Logic to retrieve photoId from URL */;

  useEffect(() => {
    async function fetchPhoto() {
      const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
        .sort_by('public_id', 'desc')
        .max_results(400)
        .execute();

      const photo = results.resources.find((img, index) => index === Number(photoId));
      if (photo) {
        const blurDataUrl = await getBase64ImageUrl(photo);
        setCurrentPhoto({ ...photo, blurDataUrl });
      }
    }

    if (photoId) {
      fetchPhoto();
    }
  }, [photoId]);

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      {currentPhoto && <Carousel currentPhoto={currentPhoto} />}
    </main>
  );
};

export default PhotoPage;


const Home: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
  const router = useRouter()
  const { photoId } = router.query
  let index = Number(photoId)

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const results = await getResults()

  let reducedResults: ImageProps[] = []
  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(context.params.photoId)
  )
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto)

  return {
    props: {
      currentPhoto: currentPhoto,
    },
  }
}

export async function getStaticPaths() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()

  let fullPaths = []
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } })
  }

  return {
    paths: fullPaths,
    fallback: false,
  }
}
