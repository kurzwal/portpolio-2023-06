import { ReactNode } from "react";
import styled from "styled-components";

export const BackgroundTemplate = styled.div`
   width: 100vw;
   height: 80vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   margin-bottom: 10vh;
   overflow: hidden;
`;

export const H1Template = styled.h1`
   font-size: 2.5rem;
   font-weight: bold;
   white-space: nowrap;
   color: ${(props) => props.theme.colors.title};
   margin-bottom: 1rem;
`;

export const H2Template = styled.h2`
   font-size: 1.8rem;
   font-weight: bold;
   color: ${(props) => props.theme.colors.title};
   margin-bottom: 0.5rem;
`;

export const H3Template = styled.h3`
   font-size: 1.4rem;
   font-weight: bold;
   color: ${(props) => props.theme.colors.title};
`;

export const TitleTemplate = styled(H1Template)`
   position: absolute;
   top: 1vh;
   left: 20vw;
   color: ${(props) => props.theme.colors.title};
   text-shadow: 3px 3px 10px ${(props) => props.theme.colors.titleshadow};
   @media (max-width: 1580px) {
      left: 10vw;
   }
   @media (max-width: 992px) {
      left: 3vw;
   }
`;

export const TextTemplate = styled.div`
   font-size: 1.1rem;
   color: ${(props) => props.theme.colors.text};
   line-height: 1.5;
`;

export const FlexColumnDiv = styled.div`
   display: flex;
   flex-direction: column;
`;

export const ObserveDiv = styled.div`
   position: absolute;
   top: 40vh;
`;

export const Line = styled.div`
   width: 100%;
   margin-top: 15px;
   border-bottom: 1px solid black;
`;

interface LinkProps {
   icon?: string;
   href?: string;
   fontSize?: string;
   onMouseEnter?: Function;
   onMouseLeave?: Function;
   children?: ReactNode;
}

const LinkIcon = styled.div<LinkProps>`
   width: 1.2rem;
   height: 1.2rem;
   display: inline-block;
   vertical-align: bottom;
   margin-bottom: 5px;
   margin-right: 2px;
   background-image: ${({ icon }) => `url(${icon})`};
   background-position: center;
   background-repeat: no-repeat;
   background-size: 100%;
`;
const LinkText = styled.a<LinkProps>`
   line-height: 1rem;
   font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "1rem")};
   text-decoration: underline;
   white-space: nowrap;
   color: ${(props) => props.theme.colors.text};
   cursor: pointer;
   &:hover {
      font-weight: bold;
   }
`;

export const Link = ({
   icon,
   children,
   href,
   fontSize,
   onMouseEnter,
   onMouseLeave,
}: LinkProps) => {
   return (
      <div style={{ display: "inline-block" }}>
         {icon && <LinkIcon icon={icon} />}
         <LinkText
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            fontSize={fontSize}
            onMouseEnter={(e: React.MouseEvent) =>
               onMouseEnter && onMouseEnter(e)
            }
            onMouseLeave={() => onMouseLeave && onMouseLeave()}
         >
            {children}
         </LinkText>
      </div>
   );
};
