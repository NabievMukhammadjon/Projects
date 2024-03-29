import React from "react";

// interface IItem {
//     value: string;
//     id: string;
//     onClick: (id: string) => void;
// }

// interface IMyListProgs {
//     list: IItem[];
// }

// export function MyList({list}: IMyListProgs) {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li> 
//             ))}
//         </ul>
//     )
// }

// =====
interface IItem {
    id: string;
    text: string;
    onClick: (id: string) => void;
    className ?: string;
    As ?: 'a' | 'li' | 'button' | 'div';
    href ?: string;
}

interface IGenericListProps {
    list: IItem[];
}

export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'div', text, onClick, className, id, href}) => (
                <As 
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    )
}