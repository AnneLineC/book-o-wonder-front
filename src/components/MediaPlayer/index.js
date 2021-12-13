import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { setMediaPlayerDisplay } from '../../actions';
import Modal from '../Modal';
import './styles.scss';

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const isMediaPlayerOpen = useSelector((state) => state.display.mediaPlayer);
  const playing = useSelector((state) => state.display.mediaPlayerDisplay.playing);
  const volume = useSelector((state) => state.display.mediaPlayerDisplay.volume);

  const handlePlayPause = () => {
    console.log('onPlay');
    dispatch(setMediaPlayerDisplay('playing', !playing));
  };

  // Allow to change the playing status when autoplay is activated
  const handlePlay = () => {
    console.log('onPlay');
    dispatch(setMediaPlayerDisplay('playing', true));
  };

  const handleVolumeChange = (event) => {
    console.log('volumeChange');
    console.log(event.currentTarget.value);
    dispatch(setMediaPlayerDisplay('volume', parseFloat(event.currentTarget.value)));
  };

  return (
    <div className="mediaplayer">
      <Modal componentName="mediaPlayer" appearingDesktopSide="left" isComponentOpen={isMediaPlayerOpen}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5qap5aO4i9A"
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
          volume={volume}
        />
        <div className="player">
          <div className="infos">
            <div
              className="infos__picture"
              style={{ backgroundImage: 'url("https://www.ladn.eu/wp-content/uploads/2021/09/lofi-girl-1200x630.jpg")' }}
            >
              <div className="infos__content">
                <div className="infos__left">
                  <button className="infos__playpause" type="button" onClick={handlePlayPause}>{playing ? <i className="fas fa-pause" /> : <i className="fas fa-play" />}</button>
                  <h2 className="infos__title">Titre du son</h2>
                </div>
                <span className="infos__category">Lofi</span>
              </div>
            </div>
          </div>
          <div className="controls">
            <label className="controls__volume" htmlFor="volume">
              <span className="controls__volume-text"><i className="fas fa-volume-up" /></span>
              <input id="volume" type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MediaPlayer;
