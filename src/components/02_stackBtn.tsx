import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

interface CircleButtonStyleProps {
   customsize?: string;
   top?: string;
   left?: string;
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
      width: ${({ customsize }) => customsize || "100px"};
      height: ${({ customsize }) => customsize || "100px"};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      text-transform: none;
      transition: all 0.3s ease;
      position: absolute;
      top: ${({ top }) => top || 0};
      left: ${({ left }) => left || 0};

      &:hover {
         background-color: #aaa;
         color: #fff;
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
