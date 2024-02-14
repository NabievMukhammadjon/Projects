import React from "react";

interface ILifecycleProps {
    someProp: number
}

interface ILifecycleState {
    stateField: number;
    isMounted: Boolean;
}

export class Livecycle extends React.Component<ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
        super(props); 

        // инициализация состояния
        this.state = {
            stateField: 0,
            isMounted: false
        };
    }

    // Этот метод вызывается непосредственно перед методом рендером,
    // а также когда каждый раз происходит ререндор, а не только при изменение пропов
    static getDerivedStateFromProps(props : Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
        return {
            stateField: props.someProp
        };
    }

    public componentDidMount() {
        document.addEventListener('resize', () => {});
        setTimeout(() => {}, 0);
        this.setState({isMounted: true})
    }

    public componentWillUnmount() {
        document.removeEventListener('resize', () => {});
    }

    // Не использовать при PureComponent
    public shouldComponentUpdate(
        nextProps: Readonly<ILifecycleProps>,
        nextState: Readonly<ILifecycleState>,
        nextContent: any,
    ): boolean {
        return this.state != nextState || this.props != nextProps;
    }

    // Этот метод вызывается перед тем как наш компонент обновиться
    // Внутри этого метода можем сохранить какой - то snapShot, сохранить
    // какое-то значение которое сейчас у нас присутствует в браузере
    // результат он  передает следующему методу который связан к нему
    // это метод componentDidUpdate
    public getSnapshotBeforeUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>,
    ): any | null {
        // return 1324;
        return null;

    }

    public componentDidUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>,
        // результат который пришел из getSnapshotBeforeUpdate
        snapshot ?: any 
    ) {
        if (snapshot > 1000) {
            this.setState({})
        }
    }

    private handleClick = () => {
        this.setState({stateField: 1})
    }

    public render() {
        return (
            <div onClick={this.handleClick}>1</div>
        )
    }
};