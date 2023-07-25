export default function Repos(data:any){
  return (
   <>
    <h1>some repositories</h1>
    {data.map((item:any) => {
       return <p key={item.id}>{item.name}</p>;
     })}
   </>  
  )
}