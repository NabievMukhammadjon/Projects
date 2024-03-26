import React from "react";
import { Dropdown } from "../Dropdown";
import styles from './genericList.css';
import { MenuIcon } from "../Icons/_icons";

export interface IItem {
    id: string;
    text: string;
    onClick ?: (id: string) => void;
}

interface IGenericListProps {
    list: IItem[];
}

export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({text, id}) => (
                <li key={id} className={styles.item}>
                    <div className={styles.number}>1</div>
                    <span>{text}</span>
                    {/* <Dropdown /> */}
                    <Dropdown
                        button={
                            <button className={styles.menuButton}>
                                <MenuIcon />
                            </button>
                        }
                    >
                        
                    </Dropdown>
                </li>
            ))}
        </>
    )
}