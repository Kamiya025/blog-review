export const metadata = {
  title: "404 | Trang không tồn tại",
}
export default function NotFound() {
  return (
    <div
      className="flex flex-col bg-sapiens bg-contain bg-center bg-no-repeat 
                  items-center justify-end h-full text-center"
    >
      <div className="grow flex items-center bg-white bg-clip-text p-2">
        <h1 className="text-[8rem] font-[1000] animate-wiggle">404</h1>
      </div>
      <div className="mt-4 text-2xl font-bold">
        Trang không tồn tại hãy quay lại sau
      </div>
    </div>
  )
}
