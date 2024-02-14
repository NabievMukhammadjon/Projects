import React from 'react';
import styles from './icons.css';
// import classNames from 'classnames';
// import { BlockIcon, ShereIcon, SaveIcon, CommentIcon, MenuIcon, WarningIcon } from './_icons';

export function Icons() {
    return (
        <div></div>
    )
}

// export enum EIcons {
//   block = 'block',
//   comment = 'comment',
//   menu = 'menu',
//   save = 'save',
//   shere = 'shere',
//   warning = 'warning'
// }

// type ISizes = 20 | 16 | 14 | 12 | 10;

// interface IIconsProps {
//   size?: ISizes;
//   name: EIcons
// }

// const iconComponents: { [key in EIcons]: React.ComponentType<any> } = {
//   menu: MenuIcon,
//   block: BlockIcon,
//   comment: CommentIcon,
//   save: SaveIcon,
//   shere: ShereIcon,
//   warning: WarningIcon,
// };

// export function Icons({name, size}: IIconsProps) {
//   const IconComponent = iconComponents[name];
  
//   if (!IconComponent) {
//     return null;
//   }
//   const classes = classNames(
//     styles.icon,
//     styles[`s${size}`]
//   );
  
//   return (
//     <div className={classes}>
//       <IconComponent />
//     </div>
//   );
// }
