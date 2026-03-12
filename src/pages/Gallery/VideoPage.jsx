import React, { useEffect } from 'react';
import BreadCums from '../../Component/BreadCums';
import breadCumbBg from '../../assets/breadcums.webp';
import introVideo from '../../assets/video.mp4';

const videoList = [
  {
    id: 1,
    title: 'Lift Installation Video',
    description:
      'Site preparation se final commissioning tak ka complete installation process dekhiye.',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/0bTIn8fuHxo',
  },
  {
    id: 2,
    title: 'Company Introduction Video',
    description:
      'Rolex Elevator ki journey, quality standards aur service commitment ka short introduction.',
    type: 'local',
    src: introVideo,
  },
  
];

const VideoPage = () => {
  useEffect(() => {
    document.title = 'Videos | Rolex Elevator';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      'content',
      'Watch Rolex Elevator videos including lift installation, company introduction, and product demo videos for residential and commercial projects.'
    );
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
    { label: 'Videos' },
  ];

  return (
    <div>
      <BreadCums headText="Our Videos" items={breadcrumbItems} image={breadCumbBg} />

      <section className="container bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:py-16">
      <div className="mx-auto mb-10 max-w-4xl text-center">
  <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
    Installation, Introduction, and Product Demo Videos
  </h2>
  <p className="text-base leading-7 text-gray-600 md:text-lg">
    On this page, you can watch practical installation work, company overview,
    and product demonstration videos of Rolex Elevator. This content helps
    clients understand the solutions better, choose the right product, and
    build confidence in the project and services.
  </p>
</div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videoList.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-video w-full bg-black">
                {video.type === 'youtube' ? (
                  <iframe
                    className="h-full w-full"
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    className="h-full w-full"
                    controls
                    preload="metadata"
                    title={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{video.title}</h3>
                <p className="text-sm leading-6 text-gray-600 md:text-base">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoPage;