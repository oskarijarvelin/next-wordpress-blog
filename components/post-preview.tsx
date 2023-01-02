import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>

      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>

      <h3 className="text-3xl mb-3 font-bold leading-snug">
        <Link
          href={`/artikkelit/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>

      <div className="flex items-center mt-4 mb-8 ">
        <div className="hidden md:block mr-12">
          <Avatar author={author} />
        </div>
        <div className="text-lg mt-1">
          <strong>Julkaistu</strong> <Date dateString={date} />.
        </div>
      </div>

      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />

    </div>
  )
}
