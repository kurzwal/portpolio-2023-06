import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

interface CircleButtonStyleProps {
   customsize?: number;
   top?: number;
   left?: number;
   bgsize?: string;
   bgimage?: string;
   bgcolor?: string;
}

type CircleButtonProps = CircleButtonStyleProps & ButtonProps;

const StyledCircleButton = styled(Button)<CircleButtonStyleProps>`
   && {
      background-color: ${({ bgcolor }) => bgcolor || "#555"};
      background-image: ${({ bgimage }) =>
         bgimage ? `url(${bgimage})` : "none"};
      background-size: ${({ bgsize }) => bgsize || "40%"};
      background-position: center;
      background-repeat: no-repeat;
      white-space: nowrap;
      color: transparent;
      min-width: 0;
      min-height: 0;
      width: ${({ customsize }) => `${customsize}vw` || "10px"};
      height: ${({ customsize }) => `${customsize}vw` || "10px"};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      text-transform: none;
      transition: all 0.3s ease;
      position: absolute;
      top: ${({ top }) => (top ? `${top}vw` : 0)};
      left: ${({ left }) => (left ? `${left}vw` : 0)};

      &:hover {
         background-color: #b08968;
         color: #fff;
      }
      @media (max-width: 768px) {
         overflow: hidden;
         font-size: 5px;
         white-space: wrap;
         width: ${({ customsize }) =>
            customsize ? `${customsize * 1.5}vw` : "10px"};
         height: ${({ customsize }) =>
            customsize ? `${customsize * 1.5}vw` : "10px"};
         top: ${({ top }) => (top ? `${top * 1.5}vw` : 0)};
         left: ${({ left }) => (left ? `${left * 1.5}vw` : 0)};
      }
   }
`;

const CircleButton: React.FC<CircleButtonProps> = ({
   customsize,
   bgimage,
   bgcolor,
   ...rest
}) => {
   const styledProps: CircleButtonStyleProps = {
      customsize,
      bgimage,
      bgcolor,
   };

   return (
      <StyledCircleButton {...styledProps} {...rest}>
         {rest.children}
      </StyledCircleButton>
   );
};

export default CircleButton;
