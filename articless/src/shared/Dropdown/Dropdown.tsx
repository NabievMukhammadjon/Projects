import React, { useEffect, useRef, useState } from 'react';
import { MenuItemsList } from '../CardsList/Card/Menu/MenuItemsList';
import { EColor, Text } from '../Text';
import styles from './dropdown.css';
import { styled } from 'styled-components';
import { DropdownPortal } from './DropdownPortal';

interface IDropdownProps {
  button: React.ReactNode;
  isOpen ?: boolean;
  onOpen ?: () => void;
  onClose ?: () => void;
}

type Coords = {
  left: number;
  top: number;
};

const NOOP = () => {}

export function Dropdown({button, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const controlRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<Coords | null>(null);
  // console.log(controlRef.current?.getBoundingClientRect());

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  // const box = controlRef.current?.getBoundingClientRect();

  const getCoords = (): Coords | null => {
    const box = controlRef.current?.getBoundingClientRect();
    // console.log(box)
    if (box) {
      return {
        left: box.left,
        top: box.top + box.height,
      };
    }

    return null;
  };

  useEffect(() => {
    if (!isDropdownOpen) return;

    const coords = getCoords();
    setCoords(coords);
  }, [isDropdownOpen]);

  const handleOpen = () => {
    // console.log(box)
    // console.log(box?.x)
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  // const MyContainer = styled.div`
  //   position: absolute;
  //   top: ${box?.top}px;
  //   right: ${box?.right}px;
  // `;
  let left = 0;
  if (coords?.left) {
    left = coords?.left - 130;
  }
  let top = 0;
  if (coords?.top) {
    top = window.scrollY + coords?.top;
  }
  // console.log(coords)
  return (
    <div className={styles.container}>
      <div ref={controlRef} onClick={handleOpen}>
        { button }
      </div>
      {/* <MyContainer>489456</MyContainer> */}
      {isDropdownOpen && (
        <DropdownPortal isOpen={isDropdownOpen} onClose={handleOpen}>
          <div 
            className={styles.dropdown}
            style={{
              left: left,
              top: top,
              position: 'absolute',
            }}
          >
            <MenuItemsList postId='1597' />
            <button className={styles.closeButton}>
              <Text mobileSize={12} size={14} color={EColor.grey66}>
                Закрыть
              </Text>
            </button>
          </div>
        </DropdownPortal>
      )}
    </div>
  );
}
