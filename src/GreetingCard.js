export default function Card(props) {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Hello {props.name}</h1>
            <h2>{props.greeting}</h2>
        </div>
    );
}