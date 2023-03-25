import style from "styled-components";

export const Wrapper = style.div`
display:flex;
position:absolute;
flex-direction:column;
align-itmes:center;
top:10%;
left:50%;
transform:translate(-50%,0);
background-color:rgba(0,0,0,1);
padding:1rem 0;
z-index:99;
`;

export const Title = style.h1`
  font-size:3.5rem;
  font-family:sans-serif;
  text-align:center;
  text-transform:uppercase;
  margin-bottom:2rem;
  margin-top:0;
  width:100vw;



`;

export const StyledForm = style.form`

display:flex;
flex-direction:column;
align-items:center;

`;

export const StyledInput = style.input`
width:30%;
text-align:center;
height:2.2rem;
margin-bottom:1rem;
border:1px solid grey;
border-radius:10px;
&:hover{

  border:1px solid rgb(100,0,200) !important;

}
&:focus{
  outline:none;
  border:1px solid rgb(100,0,200)  !important;

}


`;

export const StyledButton = style.button`

  border-radius:10px;
  background-color:rgb(90,90,90);
  width:20%;
  height:2.5rem;
 line-height:2.5rem;
 padding:0;
 font-size:.9rem;




  &:hover, &:active{
    border:1px solid rgb(100,0,200);
  }
  &:focus{
    outline:none;
    border:1px solid rgb(100,0,200)   !important;
  
  }


`;
