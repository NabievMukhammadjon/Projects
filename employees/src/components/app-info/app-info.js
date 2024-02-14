import './app-info.css'

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее количество сотрудников: {employees}</h2>
            <h2>Примию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;