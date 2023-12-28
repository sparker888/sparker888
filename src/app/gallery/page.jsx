// src/app/gallery/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { SimpleLayout } from '@/components/SimpleLayout';
import Image from 'next/image';
import Modal from '../../components/Modal';
import { getAllImageIdsFromFolder } from '../../../utils/cloudinaryUtils';
import { generateCloudinaryUrl } from '../../../utils/cloudinary';

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        async function fetchImages() {
            const imagePublicIds = await getAllImageIdsFromFolder('sparker888');
            const imagesWithUrls = imagePublicIds.map(imageId => {
                const imageUrl = generateCloudinaryUrl(imageId, { width: 720, crop: 'scale' });
                const blurDataUrl = generateCloudinaryUrl(imageId, { width: 8, quality: 70, format: 'jpg' }); // Adjust as needed
                return { publicId: imageId, url: imageUrl, blurDataUrl };
            });
            setImages(imagesWithUrls);
        }

        fetchImages();
    }, []);

    return (
        <SimpleLayout title="Image Gallery" intro="Here are some of my favorite images I've captured over the years as a photographer.">
            <div className="space-y-20">
                {selectedPhoto && <Modal images={images} onClose={() => setSelectedPhoto(null)} />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div key={index} onClick={() => setSelectedPhoto(image)}>
                            <Image src={image.url} alt="" width={720} height={480} placeholder="blur" blurDataURL={image.blurDataUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </SimpleLayout>
    );
}
