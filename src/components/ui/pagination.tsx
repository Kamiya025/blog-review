import { cva } from "class-variance-authority"
import Link from "next/link"
import { queryObjects } from "v8"

interface PaginationProps {
  href: { pathname: string; query?: Record<string, any> }
  totalPages: number
  currentPage: number
}

export const Pagination: React.FC<PaginationProps> = ({
  href,
  totalPages,
  currentPage,
}) => {
  const pageRange = getPageRange(currentPage, totalPages, 5)
  const hrefObj = {
    ...href,
    query: href.query
      ? Object.fromEntries(
          Object.entries(href.query).filter(([, value]) => value !== undefined)
        )
      : undefined,
  }
  return (
    <div className="flex justify-end py-1 gap-2">
      <DisabledLink
        href={{
          pathname: hrefObj.pathname,
          query: { ...hrefObj.query, page: currentPage - 1 },
        }}
        isCurrentPage={false}
        disabled={currentPage <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </DisabledLink>

      {pageRange.map((page) => (
        <PaginationItem
          key={page.key}
          href={hrefObj}
          label={page.pagenumber > 0 ? page.pagenumber : "..."}
          isCurrentPage={page.pagenumber === currentPage}
          disabled={page.pagenumber < 0}
        />
      ))}

      <DisabledLink
        href={{
          pathname: hrefObj.pathname,
          query: { ...hrefObj.query, page: currentPage + 1 },
        }}
        isCurrentPage={false}
        disabled={currentPage >= totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </DisabledLink>
    </div>
  )
}

function getPageRange(currentPage: number, pageLength: number, maxShow = 5) {
  if (currentPage <= 0) return []
  if (currentPage > pageLength) return []
  if (pageLength < maxShow)
    return [...Array(pageLength)].map((x, index) => ({
      pagenumber: index + 1,
      key: (index + 1).toString(),
    }))
  if (maxShow > pageLength) maxShow = pageLength
  var minRange = currentPage - 1
  var maxRange = currentPage === pageLength ? currentPage : currentPage + 1
  while (minRange < 3) {
    minRange++
    maxRange++
  }
  minRange > 1 && maxShow--
  maxRange < pageLength - 1 && maxShow--
  if (minRange + maxShow > pageLength) {
    maxShow = 4
    minRange = pageLength - maxShow
  }

  let arrayPage = [...Array(maxShow)].map((x, index) => ({
    pagenumber: minRange + index,
    key: (minRange + index).toString(),
  }))

  if (minRange > 2) {
    minRange === 3
      ? arrayPage.unshift({ pagenumber: 2, key: "2" })
      : arrayPage.unshift({ pagenumber: -1, key: "hasPreviousPage" })
  }
  minRange > 1 && arrayPage.unshift({ pagenumber: 1, key: "start" })
  if (maxRange < pageLength - 1) {
    arrayPage.push({ pagenumber: -2, key: "hasNextPage" })
  }
  maxRange <= pageLength &&
    arrayPage.push({ pagenumber: pageLength, key: "end" })
  return arrayPage
}

const linkPage = cva(
  "flex items-center px-3 py-2 transition duration-300 text-sm shadow-sm",
  {
    variants: {
      isCurrentPage: {
        true: "bg-orange-600/80 rounded-md hover:bg-orange-500 active:bg-orange-500 text-white",
        false:
          "bg-orange-200/80 rounded-md hover:bg-orange-300 active:bg-orange-500 active:text-white",
      },
      disable: {
        true: "!bg-orange-100/80 !text-gray-500",
        false: "",
      },
    },
    defaultVariants: {
      isCurrentPage: false,
      disable: false,
    },
  }
)

interface DisabledLinkProps {
  href: string | { pathname: string; query?: Record<string, any> }
  children: React.ReactNode
  isCurrentPage: boolean
  disabled: boolean
}

const DisabledLink: React.FC<DisabledLinkProps> = ({
  href,
  children,
  isCurrentPage,
  disabled,
}) => {
  // Generate the final href
  const buildHref = (): string => {
    if (typeof href === "string") return href

    const { pathname, query } = href
    const params = new URLSearchParams(query as Record<string, string>)
    return `${pathname}?${params.toString()}`
  }

  if (disabled) {
    return <span className={linkPage({ disable: true })}>{children}</span>
  }

  return (
    <Link
      href={buildHref()}
      className={linkPage({ isCurrentPage, disable: false })}
    >
      {children}
    </Link>
  )
}
const parseUrl = (
  url: string
): { pathname: string; query: Record<string, string> } => {
  const parsedUrl = new URL(url, "http://localhost")
  const pathname = parsedUrl.pathname
  const query: Record<string, string> = {}
  parsedUrl.searchParams.forEach((value, key) => {
    query[key] = value
  })
  return { pathname, query }
}

interface PaginationItemProps {
  href: string | { pathname: string; query?: Record<string, any> }
  label: string | number | React.ReactNode
  isCurrentPage: boolean
  disabled?: boolean
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  href,
  label,
  isCurrentPage,
  disabled = false,
}) => {
  const hrefWithPage =
    typeof href === "string"
      ? href
      : {
          pathname: href.pathname,
          query: { ...href.query, page: label },
        }

  return (
    <DisabledLink
      href={hrefWithPage}
      isCurrentPage={isCurrentPage}
      disabled={disabled}
    >
      {label}
    </DisabledLink>
  )
}
