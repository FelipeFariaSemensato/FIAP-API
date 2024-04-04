import Key from "@/components/Key"
import "./styles.css"

interface Props {
    name: string;
    address: string;
    phone: string;
    email:string;
}

const Person = (props:Props)=> {
    return (
        <div className="person">
            <Key field="Nome" value={props.name}/>
            <Key field="Endereço" value={props.address}/>
            <Key field="Telefone" value={props.phone}/>
            <Key field="Email" value={props.email}/>
       </div>
    );
}

export default Person;