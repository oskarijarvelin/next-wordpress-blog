import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="flex align-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <span className="mr-2" style={{ transform: 'translateY(-2px)' }}>&larr; </span>
      <Link href="/" className="hover:underline">
        Blogi
      </Link>
      .
    </h2>
  )
}
