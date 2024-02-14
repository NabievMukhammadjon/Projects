import React from "react";

export function MyHooks({title, id}: {title: string, id ?: string}) {
    // здесь .useEffect будет запускаться при каждом render
    // React.useEffect(() => {
    //     console.log('componentDidMount');
    //     console.log('componentWillUpdate');
    // });
    // здесь .useEffect запуститься только 1 раз, 
    // при componentDidMount
    // React.useEffect(() => {
    //     console.log('componentDidMount');
    //     return () => {
    //         console.log('componentWillUnmount');
    //     }
    // }, []);
    // здесь .useEffect будет срабатывать только тогда кода
    // св-во title измениться. Т.е будет следить за title
    // React.useEffect(() => {
    //     console.log('componentWillReceiveProps:', title);
    // }, [title]);

    
    // const [isMounted] = useIsMounted();

    // React.useEffect(() => {
    //     console.log('isMounted', isMounted)    
    // }, [isMounted]);


    // ==========
    // useMemo
    const items = 10;
    const multiplier = 5;
    const result = React.useMemo(
        () => calculate(items, multiplier),
        [items, multiplier]
    )

    return (
        <div>{title} {id} {result}</div>
    )
}

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, [])

    return [isMounted]
}

function calculate(items: number, multiplier: number) {
    return new Array(items).fill(1).reduce((a, v) => a * multiplier);
}


