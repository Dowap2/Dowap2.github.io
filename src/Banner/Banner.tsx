import styled from "styled-components";

interface Container {
  background: string;
}

const BannerItem = styled.div<Container>`
  width: 100vw;
  height: 240px;
  color: #000;
  background: #ffffff;
  background-image: ${props => `url(${props.background})`};
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  float: left;
  text-align: center;
`;

export function Banner(props: any) {
  return <BannerItem background={props.url}></BannerItem>;
}
