import React from 'react';
import { Main, VideoGrid, VideoCard, VideoThumbnail, VideoDetails } from './Style';
import { PageHeader } from '../../../../components/page-headers/page-headers';

function VideoAula() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Video Aula',
    },
  ];

  // Dados fictícios dos vídeos
  const videos = [
    {
      id: 1,
      title: 'Tutorial de React para Iniciantes',
      views: '1.2M visualizações',
      time: 'há 1 semana',
      thumbnail: 'https://via.placeholder.com/300x200?text=Video+1',
    },
    {
      id: 2,
      title: 'Styled Components no React',
      views: '500k visualizações',
      time: 'há 2 dias',
      thumbnail: 'https://via.placeholder.com/300x200?text=Video+2',
    },
    // Adicione mais vídeos aqui
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Video Aula" routes={PageRoutes} />
      <Main>
        <VideoGrid>
          {videos.map((video) => (
            <VideoCard key={video.id}>
              <VideoThumbnail src={video.thumbnail} alt={video.title} />
              <VideoDetails>
                <h4>{video.title}</h4>
                <p>{video.views}</p>
                <p>{video.time}</p>
              </VideoDetails>
            </VideoCard>
          ))}
        </VideoGrid>
      </Main>
    </>
  );
}

export default VideoAula;
