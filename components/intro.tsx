import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 lg:mb-32">
      <h1 className="text-8xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blogi.
      </h1>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8">
        Web-kehittäjän, yrittäjän ja tapahtuma-alan monitoimimiehen blogi.
      </p>
    </section>
  )
}
