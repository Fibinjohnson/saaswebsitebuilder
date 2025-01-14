import React from "react";
import Navigation from "@/components/site/navigation";

const HomeLayout=({children}:{children:React.ReactNode})=>{
  return(
<>
<main className="h-full">
<Navigation/>
{children}
</main>
</>
  )
}
export default HomeLayout