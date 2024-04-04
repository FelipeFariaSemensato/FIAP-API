import "./styles.css"
interface Props {
    field: string;
    value: string;
}

const Key = (props) => {
    return (
        <div className="key">
        <label>{props.field}</label>
        <div>{props.value}</div>
        </div>
    );
};
export default Key;