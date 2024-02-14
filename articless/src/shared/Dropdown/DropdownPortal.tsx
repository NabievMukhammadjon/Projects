import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MenuItemsList } from '../CardsList/Card/Menu/MenuItemsList';
import { MenuIcon } from '../Icons/_icons';
import { EColor, Text } from '../Text';
import styles from './dropdown.css';

interface IDropdownPortalProps {
  button?: React.ReactNode;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  top?: number;
  right?: number;
}

const NOOP = () => { }

export function DropdownPortal({ children, isOpen, onClose = NOOP, top, right }: IDropdownPortalProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = document.getElementById('menuDropdown');
    const container = document.createElement('div');  
    node?.appendChild(container);
    setPortalContainer(container);

    return () => {
      node?.removeChild(container);
    };
  }, []);

  // const mePosStyle = `
  //   position: absolute;
  //   top: ${top}px;
  //   right: ${right}px;
  // `;
  // console.log(mePosStyle)

  return isOpen && portalContainer
  ? ReactDOM.createPortal(
    <div className={styles.listContainer}>
        <div className={styles.list} onClick={onClose}>
         {children}
        </div>
    </div>
  , portalContainer) : null
  
  // return (
  //   <div className={styles.container}>
  //     <div onClick={handleOpen}>
  //       {button}
  //     </div>
  //     {isDropdownOpen && (
  //       <div className={styles.listContainer}>
  //         <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
  //           {children}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
