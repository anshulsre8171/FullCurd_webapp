import { StudentLayout } from "./StudentLayout"

export const Dashboard= ()=>{
return(<>
<StudentLayout>
    <div className="container bg-light dash">
   <marquee direction="right" behavior="scroll"> 
    <h1 className="mx-auto text-info mt-5 pt-5">hello users</h1> </marquee> 
    <center>under mantinance</center>
    </div>
</StudentLayout>
</>)
}