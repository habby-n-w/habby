type Props = {
  children: React.ReactNode
}

const AuthLayoutLayout = ({ children }: Props) => {
  return (
    <main className=" flex flex-col gap-5  items-center justify-center min-h-screen">
        <div className="text-4xl font-bold">
            Welcome to Habby👋
        </div>
      {children}
    </main>
  )
}
export default AuthLayoutLayout
