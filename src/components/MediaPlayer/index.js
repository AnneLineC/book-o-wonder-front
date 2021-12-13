import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { setMediaPlayerPlaying } from '../../actions';
import Modal from '../Modal';
import './styles.scss';

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const isMediaPlayerOpen = useSelector((state) => state.display.mediaPlayer);
  const playing = useSelector((state) => state.display.mediaPlayerDisplay.playing);
  const volume = useSelector((state) => state.display.mediaPlayerDisplay.volume);

  const handlePlayPause = () => {
    console.log('onPlay');
    dispatch(setMediaPlayerPlaying(!playing));
  };

  // Allow to change the playing status when autoplay is activated
  const handlePlay = () => {
    console.log('onPlay');
    dispatch(setMediaPlayerPlaying(true));
  };

  const handleVolumeChange = (event) => {
    console.log('volumeChange');
    dispatch(setMediaPlayerVolume(event.current.target));
  };

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
          width={0}
          height={0}
          playing={playing}
          onPlay={handlePlay}
        />
        <div className="illustration">
          <div
            className="illustration__picture"
            style={{ backgroundImage: 'url("https://www.ladn.eu/wp-content/uploads/2021/09/lofi-girl-1200x630.jpg")' }}
          />
        </div>
        <div className="controls">
          <button className="controls__playpause" type="button" onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
          <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
        </div>
      </Modal>
    </div>
  );
};

export default MediaPlayer;
