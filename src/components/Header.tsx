
 type headerProp = {
  data: string;
  setData: (data:string)=>void;
}

export default function Header({data, setData}:headerProp) {


  return (
    <header className="header">
      <h1>Buscar Pokemon</h1>
    <input 
    className="input" 
    type="text" 
    placeholder="Search..."
    value={data}
    onChange={(e)=>{setData(e.target.value)}}
    />
    </header>
  )
}
