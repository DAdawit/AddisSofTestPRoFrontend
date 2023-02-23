import styled from "styled-components";
export const Card_Container = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  @media (min-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, minmax(200px, auto));
  }
  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, minmax(200px, auto));
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, minmax(200px, auto));
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, minmax(200px, auto));
  }
`;
export const Card = styled.div`
  border: 1px solid grey;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: white;
`;

export const Card_Image = styled.img`
  width: 100%;
  display: block;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const Card_Title = styled.h2`
  color: #0b0033;
  text-align: center;
  text-transform: capitalize;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
`;

export const Card_Subtitle = styled.h3`
  text-align: center;
  font-family: "Nunito", sans-serif;
  color: #0b0033;
  font-size: 14px;
`;

export const Music_player_Container = styled.section`
  margin-top: 10px;
  display: flex;
  background-color: white;
  justify-content: center;
  max-height: 100px;
`;
export const Music_DetailPage_Container = styled.div`
  display: grid;
  height: 92vh;
  background-color: #e7e7eca3;
  position: relative;
`;

export const Music_Detail_Cover_Backgroud = styled.section`
  max-height: 70vh;
  border-radius: 0px;
`;
export const Music_Detail_player_Container = styled(Music_player_Container)`
  margin-top: 10px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const Music_detail_Image = styled(Card_Image)`
  text-align: center;
  border-radius: 0px;
  max-height: 350px;
  @media (min-width: 800px) {
    max-width: 400px;
  }
`;

export const Flex_Center = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 5px;
`;

export const Music_detail_Title = styled(Card_Title)`
  font-size: 25px;
`;

export const Music_detail_Subtitle = styled(Card_Subtitle)`
  font-size: 25px;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: 0.5s all ease-out;
  border: none;
  background-color: #1d1d53;
  color: white;
  font-family: "Nunito", sans-serif;
  width: 90px;
  height: 40px;
`;

export const Submit_Button = styled(StyledButton).attrs({
  type: "submit",
})`
  margin-top: 20px;
  border-radius: 20px;
`;
