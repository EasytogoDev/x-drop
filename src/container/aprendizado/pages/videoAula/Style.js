import Styled from 'styled-components';

const Main = Styled.main`
  padding: 20px;
  background-color: #f0f0f0; /* Cor de fundo clara */
  min-height: 100vh;
`;

export const VideoCard = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  iframe {
    border-radius: 8px;
  }

  h4 {
    font-size: 1.2em;
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
    font-size: 0.9em;
    color: #666;
  }
`;

export const VideoGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
  width: 100%;
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

export { Main, VideoThumbnail, VideoDetails };
