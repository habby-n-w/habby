import { SignedIn, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

const Navbar = () => {
    const { userId }: { userId: string | null } = auth()

  return (
    <div className=" flex w-full items-center justify-center  mx-auto ">
      <div className="max-w-[1440px] w-full flex items-center justify-between fixed top-0  min-h-8 p-4">
        <span className="flex text-4xl font-bold tracking-wider">HABBY</span>
        <SignedIn>
            <UserButton  />
          </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
