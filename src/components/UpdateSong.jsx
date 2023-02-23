import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleSongPending } from "../store/SingleSongSlice";
import { Navigate, useParams, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { putSongPennding } from "../store/UpdateSongSlice";
import {
  Form_Container,
  Form_Heading,
  StyledInput,
  Validation_Text,
  Form_Label,
  Form_Control,
} from "../StyledComponents/StyledForms";
import { Avatar_Image } from "../StyledComponents/StyledContainer";
import {
  Flex_Center,
  Submit_Button,
} from "../StyledComponents/StyeledCardMusicList";
import musicMonky from "/muscMonky2.png";

const UpdateSong = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleSongPending(_id));
  }, []);
  const song = useSelector((state) => state.song);
  const updateSong = useSelector((state) => state.updateSong);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      _id: song?.song?._id,
      title: song?.song.title,
      artist: song?.song.artist,
    },
  });

  const updateSongData = async (data) => {
    if (data.songeTitle.length === 0) {
      delete data.songeTitle;
      await dispatch(putSongPennding(data));
    } else {
      // if user upload new song
      const formData = new FormData();
      formData.append("_id", song?.song?._id);
      formData.append("songeTitle", data.songeTitle[0]);
      formData.append("title", data.title);
      formData.append("artist", data.artist);
      await dispatch(putSongPennding(formData));
    }
  };
  console.log(updateSong);
  return (
    <div>
      <Flex_Center>
        <Form_Container>
          <Flex_Center>
            <Avatar_Image src={musicMonky} />
          </Flex_Center>
          <Form_Heading>Update Music</Form_Heading>
          <form onSubmit={handleSubmit(updateSongData)}>
            <Form_Control>
              <Form_Label htmlFor="title">Title</Form_Label>
              <StyledInput
                type="text"
                id="title"
                name="title"
                {...register("title", { required: "Title is required" })}
              />
              <Validation_Text>{errors.title?.message}</Validation_Text>
            </Form_Control>
            <Form_Control>
              <Form_Label htmlFor="artist">Artist</Form_Label>
              <StyledInput
                type="text"
                id="artist"
                name="artist"
                {...register("artist", { required: "Artist is requsired" })}
              />
              <Validation_Text>{errors.artist?.message}</Validation_Text>
            </Form_Control>
            <Form_Control>
              <Form_Label htmlFor="songeTitle">Upload Music File</Form_Label>
              <br />
              <input type="file" id="songeTitle" {...register("songeTitle")} />
              <br />
              <Validation_Text>{errors.songeTitle?.message}</Validation_Text>
            </Form_Control>
            <Form_Control className="form-container">
              <Flex_Center>
                <Submit_Button>Update</Submit_Button>
              </Flex_Center>
            </Form_Control>
          </form>
        </Form_Container>
      </Flex_Center>
      {updateSong.redirect ? <Navigate exact to="/" /> : null}
    </div>
  );
};

export default UpdateSong;
