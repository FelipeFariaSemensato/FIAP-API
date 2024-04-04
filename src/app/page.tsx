import Key from "@/components/Key";
import Person from "@/components/Person";

interface Item {
  name:string;
  address:string;
  phone:string;
  email:string;
}

const dataPerson: Item[] = [
  {
    name: 'Felipe',
    address:'Rua do K7',
    phone: '(11) 40028922',
    email: 'xurrasquinhodegato@gmail.com'
    status: 'sucess'
  },
  {
    name: 'Clodovilda',
    address:'Araraquara',
    phone: '(11) 123456789',
    email: 'morreumamando@gmail.com'
    status:' error'
  },
  {
    name: 'Gerson',
    address:'Combos',
    phone: '(11) 2345678',
    email: 'eqbeqflashaaeqr@gmail.com'
  },
];

export default function Home() {
  return (
    <main>
      {dataPerson.map((item: Item) => {
            return (
            <Person 
            key="value"
            name={item.name} 
            address={item.address} 
            phone={item.phone} 
            email={item.email}
            />
          );
        })} 
    </main>
  );
}
