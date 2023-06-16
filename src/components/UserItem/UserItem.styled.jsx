import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 214px;
    left: 0;
    display: block;
    height: 8px;
    width: 380px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ImgThumb = styled.div`
  height: 168px;
  width: 308px;
  margin-bottom: 88px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  overflow: hidden;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: #ebd8ff;

  &:nth-of-type(1) {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  margin-top: 26px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
