import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleSongPending } from "../store/SingleSongSlice";
import { deleteSongPennding } from "../store/DeleteSongSlice";
import { Navigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import musicMonky from "/muscMonky2.png";
import {
  Music_DetailPage_Container,
  Music_Detail_Cover_Backgroud,
  Music_Detail_player_Container,
  Music_detail_Title,
  Music_detail_Subtitle,
  Music_detail_Image,
  Flex_Center,
  StyledButton,
} from "../StyledComponents/StyeledCardMusicList";
import cover from "/cover.jpg";
export const SingleSong = () => {
  const song = useSelector((state) => state.song);
  const dispatch = useDispatch();

  const deleteSongState = useSelector((state) => state.deletesong);
  const { _id } = useParams();
  useEffect(() => {
    dispatch(getSingleSongPending(_id), history);
  }, []);

  const deleteSong = async () => {
    // console.log("delete song");
    await dispatch(deleteSongPennding(_id));
  };
  // const music = require(song?.song?.songUrl);
  // console.log(music);
  console.log(song?.song?.songUrl);
  return (
    <div>
      <Music_DetailPage_Container>
        <Music_Detail_Cover_Backgroud>
          <Flex_Center>
            <Music_detail_Image src={musicMonky} />
          </Flex_Center>
          <Music_detail_Title>{song?.song?.title}</Music_detail_Title>
          <Music_detail_Subtitle>{song?.song?.artist}</Music_detail_Subtitle>
          <Flex_Center>
            <NavLink to={`/updateSong/${_id}`} className="edit-button">
              Edit
            </NavLink>
            <StyledButton onClick={deleteSong}>Delete</StyledButton>
          </Flex_Center>
        </Music_Detail_Cover_Backgroud>
        <Music_Detail_player_Container>
          <AudioPlayer src={`http://localhost:4000/${song?.song?.songUrl}`} />
          {/* <AudioPlayer src="../../../backend/assets/1677089355330nigu (1).mp3" /> */}
          {/* ../../../backend/assets/1677089355330nigu (1).mp3 */}
        </Music_Detail_player_Container>
      </Music_DetailPage_Container>
      {deleteSongState.redirect ? <Navigate exact to="/" /> : null}
    </div>
  );
};

// https://www.youtube.com/watch?v=DPOzlL1fpnU
