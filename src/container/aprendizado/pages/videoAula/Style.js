import Styled from 'styled-components';

const Main = Styled.main`
  padding: 20px;
  background-color: #f0f0f0; /* Cor de fundo clara */
  min-height: 100vh;
`;

const VideoGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const VideoCard = Styled.div`
  background-color: #ffffff; /* Cor de fundo dos cards clara */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const VideoThumbnail = Styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const VideoDetails = Styled.div`
  padding: 10px;
  color: #333; /* Cor do texto escura */

  h4 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #000; /* Cor do título ainda mais escura */
  }

  p {
    font-size: 14px;
    color: #666; /* Cor do texto mais clara */
  }
`;

export { Main, VideoGrid, VideoCard, VideoThumbnail, VideoDetails };
