
type UserInfo = {
  (name: string):any
}

export async function getUserData(name: string){
  return await fetch("https://api.github.com/"+name,{
    method: 'GET',
    headers:{
      "Accept": "application/vnd.github+json",
      "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }})
    .then((res) => res.json())
    // .then((data) => {
    //   return data
    // })
  // console.log(retunData)

} 