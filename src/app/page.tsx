
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 ">
      <Image src="/intro.png" height={200} width={200} alt="Home" />
      <div className='text-xl font-semibold'>
      Building habits just made easy <br /> with HABBY

      </div>
      <Link href="/sign-in">Click me</Link>
    </main>
  )
}
