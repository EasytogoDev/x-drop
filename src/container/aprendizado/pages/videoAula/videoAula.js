import React, { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import ReactPlayer from 'react-player';
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { PageHeader } from '../../../../components/page-headers/page-headers';

// Estilização e organização do layout
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

  const [aulas, setAulas] = useState([]);
  const [progressos, setProgressos] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const playerRef = useRef({});
  const usuarioId = 1; // ID do usuário

  // Função para carregar as aulas
  function carregaAulas() {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/aprendizado/videos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedAulas = result.map((aula) => ({
          codigo: aula.codigoVIDEO,
          id: aula.video_idVIDEO,
          title: aula.tituloVIDEO,
          views: aula.visualizacoesTREINAMENTO || '0 visualizações',
          time: aula.duracaoVIDEO || 'Duração não disponível',
          descricao: aula.descricaoVIDEO,
          youtubeLink: `https://www.youtube.com/watch?v=${aula.video_idVIDEO}`,
        }));
        setAulas(mappedAulas);
        // Seleciona automaticamente o primeiro vídeo
        if (mappedAulas.length > 0) {
          setSelectedVideo(mappedAulas[0]);
        }
      })
      .catch((error) => console.error('Erro ao carregar vídeos:', error));
  }

  // Função para carregar o progresso do vídeo
  function carregaProgresso(videoId) {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/aprendizado/progresso/${usuarioId}/${videoId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProgressos((prev) => ({
          ...prev,
          [videoId]: result.progresso || 0,
        }));
      })
      .catch((error) => console.error('Erro ao carregar progresso:', error));
  }

  // Função para salvar o progresso do vídeo
  function salvaProgresso(videoId, progresso) {
    const accessToken = Cookies.get('access_token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        usuarioId,
        videoId,
        progresso,
      }),
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/aprendizado/progresso`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('Progresso salvo:', result);
      })
      .catch((error) => console.error('Erro ao salvar progresso:', error));
  }

  // Carregar as aulas ao iniciar o componente
  useEffect(() => {
    carregaAulas();
    carregaProgresso();
    salvaProgresso();
  }, []);

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Video Aula" routes={PageRoutes} />
      <Grid container spacing={2} style={{ padding: '20px' }}>
        {/* Player de vídeo do lado esquerdo */}
        <Grid item xs={12} md={7}>
          {selectedVideo && (
            <Card style={{ marginBottom: 20 }}>
              <CardContent>
                <Typography variant="h5" component="div" style={{ paddingBottom: 15 }}>
                  {selectedVideo.title}
                </Typography>
                <ReactPlayer
                  ref={(player) => {
                    playerRef.current[selectedVideo.id] = player;
                  }}
                  url={selectedVideo.youtubeLink}
                  width="100%"
                  height="480px"
                  controls
                  playing={false}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 0, controls: 1 },
                    },
                  }}
                  onReady={() => {
                    const progresso = progressos[selectedVideo.id] || 0;
                    if (progresso > 0) {
                      playerRef.current[selectedVideo.id].seekTo(progresso, 'seconds');
                    }
                  }}
                  progressInterval={1000}
                  onProgress={(state) => {
                    const progresso = state.playedSeconds;
                    salvaProgresso(selectedVideo.id, progresso);
                  }}
                />
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* Lista de vídeos no lado direito */}
        <Grid item xs={12} md={5}>
          <Card style={{ color: '#000' }}>
            <CardContent>
              <Typography variant="h6">Conteúdo</Typography>
              <List>
                {aulas.map((video) => (
                  <ListItem
                    button
                    key={video.id}
                    onClick={() => {
                      setSelectedVideo(video);
                      carregaProgresso(video.id);
                    }}
                    selected={selectedVideo && selectedVideo.id === video.id}
                    style={{
                      backgroundColor: selectedVideo && selectedVideo.id === video.id ? '#0f172a' : 'transparent',
                      color: selectedVideo && selectedVideo.id === video.id ? '#fff' : '#ccc',
                    }}
                  >
                    <ListItemText primary={video.title} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default VideoAula;
