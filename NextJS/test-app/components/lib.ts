

export function getUserData(name: string){
  console.log("pass")
  return fetch("https://api.github.com/"+name,{
    method: 'GET',
    headers:{
      "Accept": "application/vnd.github+json",
      "Authorization": "Bearer "+`${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }})
} 