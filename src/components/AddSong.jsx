import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postNewSongPennding } from "../store/NewSongSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import musicMonky from "/muscMonky2.png";
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
const AddSong = () => {
  const newSong = useSelector((state) => state.newSong);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("songeTitle", data.songeTitle[0]);
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    dispatch(postNewSongPennding(formData));
  };
  return (
    <div>
      <Flex_Center>
        <Form_Container>
          <Flex_Center>
            <Avatar_Image src={musicMonky} />
          </Flex_Center>
          <Form_Heading>Add Music</Form_Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                type="file"
                id="songeTitle"
                {...register("songeTitle", { required: "This is required" })}
              />
              <br />
              <Validation_Text>{errors.songeTitle?.message}</Validation_Text>
            </Form_Control>
            <Form_Control className="form-container">
              <Flex_Center>
                <Submit_Button>submit</Submit_Button>
              </Flex_Center>
            </Form_Control>
          </form>
        </Form_Container>
      </Flex_Center>
      {newSong.redirect ? <Navigate to="/" /> : null}
    </div>
  );
};
export default AddSong;
