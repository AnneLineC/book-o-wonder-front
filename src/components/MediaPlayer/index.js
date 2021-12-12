import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import Modal from '../Modal';
import './styles.scss';

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const isMediaPlayerOpen = useSelector((state) => state.display.mediaPlayer);

  return (
    <div className="mediaplayer">
      <Modal componentName="mediaPlayer" appearingDesktopSide="left" isComponentOpen={isMediaPlayerOpen}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          config={{
            youtube: {
              /* Parameters for playerVars : https://developers.google.com/youtube/player_parameters?playerVersion=HTML5#Parameters */
              playerVars: {
                autoplay: 0, controls: 0, loop: 1, modestbranding: 1, showinfo: 0,
              },
            },
          }}
        />
      </Modal>
    </div>
  );
};

export default MediaPlayer;
