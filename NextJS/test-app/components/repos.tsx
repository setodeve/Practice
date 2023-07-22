// import { userRepoState } from '@/components/stroe'
// import { useRecoilState } from 'recoil'

// async function getData(name:string){
//   return await fetch("https://api.github.com/users/"+`${name}`)
//               .then((res) => res.json())
//               .then((data) => {
//                 return data
//               })
// }

export default function Repos(data:any){
  // const [userRepo,setUserRepo] = useRecoilState(userRepoState)

  // if(data&& Object.keys(userRepo).length==0) setUserRepo(await getData(`${data.name}`+"/repos"))

  return (
   <>
    <h1>some repositories</h1>
   </>  
  )
}