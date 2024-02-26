import './style.css';
const PageContainer=(props)=>{
    return (
        <div className="wrapper">
            <h2>{props.HeaderText}</h2>
            <span>{props.icon}</span>
        </div>
    )
}
export default PageContainer;