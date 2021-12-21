import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { setMediaPlayerDisplay, loadSoundFromAPI, loadSoundsFromAPI } from '../../actions';
import Modal from '../Modal';
import './styles.scss';
import MusicPreview from './MusicPreview';

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const baseURI = useSelector((state) => (state.display.baseURI));

  const isMediaPlayerOpen = useSelector((state) => state.display.mediaPlayer);
  const playing = useSelector((state) => state.display.mediaPlayerDisplay.playing);
  const volume = useSelector((state) => state.display.mediaPlayerDisplay.volume);

  // Current music
  const musicTitle = useSelector((state) => state.sounds.currentMusic.name);
  const musicURL = useSelector((state) => state.sounds.currentMusic.music);
  const musicImage = useSelector((state) => state.sounds.currentMusic.image);
  const musicCategories = useSelector((state) => state.sounds.currentMusic.categories);
  const currentMusicIsLoaded = useSelector((state) => state.display.loaded.currentMusic);

  // Musics list
  const musicsList = useSelector((state) => state.sounds.musicsList);
  const musicsListIsLoaded = useSelector((state) => state.display.loaded.musicsList);

  useEffect(() => {
    dispatch(loadSoundsFromAPI());
  }, []);

  // Handlers
  const handleSetMusic = (id) => {
    dispatch(loadSoundFromAPI(id));
  };

  const handlePlayPause = () => {
    dispatch(setMediaPlayerDisplay('playing', !playing));
  };

  const handlePlay = () => { // Allow to change the playing status when autoplay is activated
    dispatch(setMediaPlayerDisplay('playing', true));
  };

  const handleVolumeChange = (event) => {
    // consolog(event.currentTarget.value);
    dispatch(setMediaPlayerDisplay('volume', parseFloat(event.currentTarget.value)));
  };

  return (
    <div className="mediaplayer">
      <Modal componentName="mediaPlayer" appearingDesktopSide="left" isComponentOpen={isMediaPlayerOpen}>
        {musicsListIsLoaded
      && (
        <div className="player">
          {currentMusicIsLoaded && (
          <div>
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

            <div className="infos">
              <div
                className="infos__picture"
                style={{ backgroundImage: `url("${baseURI}/images_audio_folder/${musicImage}")` }}
              >
                <div className="infos__content">
                  <div className="infos__left">
                    <button className="infos__playpause" type="button" onClick={handlePlayPause}>{playing ? <i className="fas fa-pause" /> : <i className="fas fa-play" />}</button>
                    <h2 className="infos__title">{musicTitle}</h2>
                  </div>
                  <div className="infos__right">
                    {musicCategories.map(
                      (category) => (<span key={category.id} className="infos__category">{category.name}</span>),
                    )}
                  </div>
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
          )}
          <div className="music-list">
            {musicsList.map(
              (music) => (
                <MusicPreview
                  key={music.id}
                  id={music.id}
                  title={music.name}
                  categories={music.categories}
                  handleSetMusic={handleSetMusic}
                />
              ),
            )}
          </div>
        </div>
      )}
      </Modal>
    </div>
  );
};

export default MediaPlayer;
