import { IconType } from 'react-icons';
import { ComponentType, SVGAttributes } from 'react';

declare module 'react-icons/fa' {
  export const FaReact: IconType;
  export const FaNodeJs: IconType;
  export const FaDatabase: IconType;
  export const FaGitAlt: IconType;
  export const FaGithub: IconType;
  export const FaJs: IconType;
  export const FaHtml5: IconType;
  export const FaCss3Alt: IconType;
  export const FaSalesforce: IconType;
  export const FaMicrosoft: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaLinkedin: IconType;
  export const FaTwitter: IconType;
  export const FaEnvelope: IconType;
  export const FaLaptopCode: IconType;
  export const FaCode: IconType;
  export const FaKeyboard: IconType;
}

declare module 'react-icons/si' {
  export const SiExpress: IconType;
  export const SiMongodb: IconType;
  export const SiMysql: IconType;
  export const SiJira: IconType;
  export const SiTypescript: IconType;
}

declare module 'react-icons' {
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;
} 