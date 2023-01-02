import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  excerpt,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center mb-12">
        <div className="hidden md:block mr-12">
          <Avatar author={author} />
        </div>
        <div className="text-lg mt-1">
          <strong>Julkaistu</strong> <Date dateString={date} />.
          <Categories categories={categories} />
        </div>
      </div>
      <div
        className="text-3xl font-light leading-relaxed mb-16 mr-16"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
      </div>
    </>
  )
}
