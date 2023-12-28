import Image from 'next/image';
import { useRouter } from 'next/router';
import useKeypress from 'react-use-keypress';
import SharedModal from './SharedModal';

export default function Carousel({ index, currentPhoto }) {
  const router = useRouter();

  function closeModal() {
    router.push('/', undefined, { shallow: true });
  }

  function changePhotoId(newVal) {
    // Update the logic to change the photo ID based on your application's needs
    // For instance, this could involve updating the state or navigating to a new route
  }

  useKeypress('Escape', closeModal);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        {/* Display the blurred background image */}
        <Image
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/e_blur:1000,f_auto,q_auto/${currentPhoto.public_id}.${currentPhoto.format}`}
          alt="Blurred background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </button>
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  )
}
