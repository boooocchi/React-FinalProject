import style from "styled-components";
import male from "./assets/male.jpg";
import female from "./assets/female.jpg";

export const Wrapper = style.div`
display:flex;
height:100vh;
width:100%;
`;

export const BackgroundLeft = style.img`
border-right:1px solid rgba(200,200,0,0.5);
height:100%;
width:50vw;
`;

export const BackgroundRight = style.img`
border-left:1px solid rgba(200,200,0,0.5);
width:50vw;
height:100%;
`;
