import { userInfoState, userRepoState, currentPageState } from '@/components/stroe'
import { useRecoilState } from 'recoil'
import Repos from "@/components/repos"
import Pagination from './pagination'

async function getData(name:string){
  return await fetch("https://api.github.com/users/"+`${name}`)
              .then((res) => res.json())
              .then((data) => data)
}

export default async function User(data:any){
  const [userInfo,setUserInfo] = useRecoilState(userInfoState)
  const [userRepo,setUserRepo] = useRecoilState(userRepoState)
  const [currentPage,setCurrentPage] = useRecoilState(currentPageState)

  const onPageChange = (page) => {
    setCurrentPage(page)
  }; 

  if(data&& Object.keys(userRepo).length==0&& Object.keys(userInfo).length==0) setUserRepo(await getData(`${data.name}`+"/repos"))
  if(data&& Object.keys(userInfo).length==0) setUserInfo(await getData(data.name))

  return (
   <>
    {Object.keys(userInfo).length==0 ? (
      <>no name</>
    ): (
      <>
        <div>
          <h1>{userInfo.login}</h1>
        </div>
        {
          Object.keys(userRepo).length==0 ? (
            <>
              <h1>no repository</h1>
            </>
          ):(
            <>
              <Repos data={userRepo}/>
              <Pagination
                  items={userRepo.length} // 100
                  currentPage={currentPage} // 1
                  pageSize={5} // 10
                  onPageChange={onPageChange}
              />
            </>
          )}
      </>
    )}
   </>  
  )
}