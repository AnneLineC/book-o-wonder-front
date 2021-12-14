import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { setMediaPlayerDisplay } from '../../actions';
import Modal from '../Modal';
import './styles.scss';
import MusicPreview from './MusicPreview';

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const isMediaPlayerOpen = useSelector((state) => state.display.mediaPlayer);
  const playing = useSelector((state) => state.display.mediaPlayerDisplay.playing);
  const volume = useSelector((state) => state.display.mediaPlayerDisplay.volume);

  // Current music
  const musicTitle = useSelector((state) => state.sounds.currentMusic.name);
  const musicURL = useSelector((state) => state.sounds.currentMusic.music);
  const musicImage = useSelector((state) => state.sounds.currentMusic.image);
  const musicCategories = useSelector((state) => state.sounds.currentMusic.categories);

  // Musics list
  const musicsList = useSelector((state) => state.sounds.musicsList);

  // Handlers
  const handlePlayPause = () => {
    console.log('onPlay');
    dispatch(setMediaPlayerDisplay('playing', !playing));
  };

  const handlePlay = () => { // Allow to change the playing status when autoplay is activated
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
          url={musicURL}
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
                  <h2 className="infos__title">{musicTitle}</h2>
                </div>
                {musicCategories.map(
                  (category) => (<span className="infos__category">{category.name}</span>),
                )}
              </div>
            </div>
          </div>
          <div className="controls">
            <label className="controls__volume" htmlFor="volume">
              <span className="controls__volume-text"><i className="fas fa-volume-up" /></span>
              <input id="volume" type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
            </label>
          </div>
          <div className="music-list">
            {musicsList.map(
              (music) => (<MusicPreview title={music.name} categories={music.categories} />),
            )}
            {/* <MusicPreview title="Le lofi de ouf" category="Fantasy" />
            <MusicPreview title="Le bruit de l'endive" category="Aventure" />
            <MusicPreview title="Le feu ça brule" category="Science Fiction" />
            <MusicPreview title="Et l'eau ça... non !" category="Enfant" />
            <MusicPreview title="Vous le valez bien" category="Horreur" />
            <MusicPreview title="Le lofi de ouf" category="Aventure" />
            <MusicPreview title="Le bruit de l'endive" category="Nature" />
            <MusicPreview title="Le feu ça brule" category="Science Fiction" />
            <MusicPreview title="Et l'eau ça... non !" category="Nature" />
            <MusicPreview title="Vous le valez bien" category="Horreur" /> */}
          </div>
        </div>

      </Modal>
    </div>
  );
};

export default MediaPlayer;
