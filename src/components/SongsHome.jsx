import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSongsPending } from "../store/SongSlice";
import { resetPutSong } from "../store/UpdateSongSlice";
import { Link } from "react-router-dom";
import { resetDeleteSongState } from "../store/DeleteSongSlice";
import { Container } from "../StyledComponents/StyledContainer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  Card,
  Card_Image,
  Card_Title,
  Card_Subtitle,
  Music_player_Container,
  Card_Container,
} from "../StyledComponents/StyeledCardMusicList";
import cover from "/cover.jpg";
export const SongHome = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  useEffect(() => {
    dispatch(getSongsPending());
  }, []);
  useEffect(() => {
    dispatch(resetDeleteSongState());
  }, []);
  useEffect(() => {
    dispatch(resetPutSong());
  }, []);
  const SongsElement = songs?.songs.map((song) => (
    <Card key={song._id}>
      <Link to={`/songs/${song._id}`}>
        <Card_Image src={cover} />
      </Link>
      <Card_Title>{song.title}</Card_Title>
      <Card_Subtitle>{song.artist}</Card_Subtitle>
      <Music_player_Container>
        <AudioPlayer src={`http://localhost:4000/${song.songUrl}`} />
      </Music_player_Container>
    </Card>
  ));
  return (
    <Container>
      <div>{songs.loading && <div>loading...</div>}</div>
      {!songs.loading && songs.error ? <div>Error : {songs.error}</div> : null}
      <Card_Container>{SongsElement}</Card_Container>
    </Container>
  );
};

export default SongHome;
