"use client"
import { RankAuthor } from "@/components/rank/rank-author"
import { RankPost } from "@/components/rank/rank-post"
import { useParams, useSearchParams } from "next/navigation"
import { useState } from "react"
import { BannerDetailPost } from "./banner"
import { OtherPostWrapper } from "./other-post"

export const DetailPostWrapper = () => {
  const [isCenter, setIsCenter] = useState(false)
  const { slugId } = useParams()
  return (
    <div className="flex flex-col gap-6 w-full min-h-full h-full">
      <BannerDetailPost
        title={`Lorem ipsum odor amet, consectetuer adipiscing elit. ${slugId}`}
        time="25/10/2001"
        views={5000}
      />

      <div
        className={
          isCenter
            ? "flex flex-col gap-6 md:p-8"
            : "grid grid-cols-12 gap-6 h-full max-h-full"
        }
      >
        <div className="col-span-full md:col-span-full lg:col-span-8 flex flex-col gap-3 max-h-full">
          <div className="grow relative col-span-full bg-white shadow-lg rounded-md px-5 py-6">
            <div
              className="absolute top-1 right-2 hover:bg-slate-200 rounded-md p-2 cursor-pointer hidden md:block"
              onClick={() => {
                setIsCenter((pre) => !pre)
              }}
            >
              {isCenter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              )}
            </div>
            <div>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Id
              scelerisque natoque ipsum per primis curabitur natoque praesent?
              Erat netus amet hac turpis augue efficitur mauris. Cras proin non
              nunc et mollis quam. Auctor elementum rutrum quis ut mus commodo.
              Ad luctus adipiscing natoque lacinia sit rutrum condimentum
              mattis? Congue dignissim eget fringilla, mollis dictum nec. Nulla
              velit vitae ultricies adipiscing turpis vivamus laoreet. Himenaeos
              mauris netus hac orci porttitor non ultrices vivamus. Dictumst
              maecenas mollis praesent blandit maximus placerat quis velit.
              Egestas risus ornare aliquet leo ultricies. Cubilia mollis cursus
              dictumst penatibus potenti. Fermentum fusce natoque purus iaculis
              molestie mauris; aliquam sem. Condimentum tempor rhoncus nisl nec
              ex quisque hendrerit erat. Varius ultricies turpis litora
              hendrerit molestie malesuada. Sed mus mollis laoreet nisi vitae
              vitae. Vel dui torquent metus scelerisque rutrum. Fusce nisl nam
              habitasse in quam magnis. Ornare platea per ligula platea semper.
              Finibus ad efficitur habitasse vehicula eleifend lacus risus
              placerat. Dignissim litora porta iaculis primis class arcu. Morbi
              habitant posuere ultricies pharetra efficitur consectetur gravida
              habitant facilisi. Metus tortor inceptos proin himenaeos justo
              mus. Massa porttitor egestas aptent aliquet; quam egestas
              scelerisque luctus non. Tellus interdum pharetra sit lacus
              dapibus. Conubia nec nascetur purus platea, a maecenas. Tincidunt
              eget scelerisque laoreet cras lectus luctus. Feugiat dictum arcu
              viverra montes suscipit. Vestibulum purus iaculis nam; cras
              egestas ullamcorper. Magna vitae aenean eget sodales penatibus
              risus feugiat netus. Cubilia gravida pharetra scelerisque finibus
              pellentesque. Sagittis tortor aenean per nibh vitae taciti! Luctus
              eros erat adipiscing volutpat fames posuere quisque. Venenatis
              finibus ante rhoncus vitae magna fames purus leo. Fusce elementum
              integer justo enim lobortis cursus. Nibh sapien amet lacus nec
              orci. Vestibulum habitant quam at vehicula class faucibus
              adipiscing vestibulum. Penatibus rhoncus tincidunt facilisi hac
              blandit. Lacus mi fringilla vitae; torquent egestas nec
              consectetur. Viverra mauris class vitae curabitur varius porta
              suscipit fames. Risus lectus elit aliquam morbi eros ridiculus
              sodales. Dolor malesuada consectetur efficitur sollicitudin
              sociosqu posuere. Class lacus quam nullam interdum tincidunt
              dictum proin. Himenaeos per ornare platea consectetur nam elit
              litora. Est lobortis cras egestas tristique varius. Dis dictum
              laoreet dui facilisis vitae leo conubia montes. Ullamcorper
              adipiscing tempor ipsum netus platea senectus. Accumsan mi
              scelerisque vitae; sagittis laoreet libero sapien. Nulla donec
              aptent himenaeos venenatis turpis nisl scelerisque. Hendrerit
              fames facilisis integer semper morbi eros. Enim erat elit urna
              felis elementum vitae tempor class. Diam senectus porta facilisis
              semper purus adipiscing laoreet orci. Sapien aliquet penatibus
              erat quisque, eleifend himenaeos turpis rutrum. Class quisque nam
              suscipit facilisi nunc cubilia. Ornare neque quisque mollis
              senectus neque faucibus quis magna egestas. Iaculis sapien lacus
              ultrices accumsan facilisis elementum. Augue suspendisse magnis
              integer placerat nulla. Mus ligula eros, a quisque sollicitudin
              torquent senectus dolor mollis. Venenatis nullam vulputate aliquam
              velit eros felis. Eleifend et viverra nam tellus tincidunt
              eleifend cursus. Sodales platea sit per suscipit quisque tempus
              nulla convallis interdum. Placerat urna commodo condimentum est
              consectetur aptent hac odio. Montes nulla cursus proin per sed.
              Risus tempor mollis, nibh eget congue quis pharetra. Cursus vel
              montes conubia; suscipit fames viverra ut cubilia. Ut vehicula
              posuere torquent tincidunt velit. Aptent luctus pellentesque
              pellentesque varius ex a. Ligula sagittis auctor et rhoncus in.
              Dictum quis nascetur euismod dis porttitor. Penatibus imperdiet
              ridiculus, platea eleifend risus nunc accumsan. Dis quis ornare
              porttitor arcu ligula quis imperdiet. Malesuada aliquam litora
              inceptos orci luctus ridiculus eu. Per primis vestibulum varius
              suscipit non neque feugiat malesuada. Venenatis scelerisque
              rutrum; habitant erat inceptos ad. Laoreet curae tempus blandit
              libero elementum magna. Maecenas vitae duis fames justo ad amet
              metus duis felis. Eget cursus orci elementum tempor inceptos,
              eleifend pretium. Aenean taciti feugiat mauris malesuada nulla est
              vitae. Interdum lobortis rutrum himenaeos ridiculus feugiat
              sollicitudin urna. Torquent nibh nibh blandit, fermentum iaculis
              vitae. Pretium litora pharetra aliquam; odio mauris penatibus cras
              mattis. Interdum massa in massa; duis malesuada vestibulum
              molestie. Vestibulum morbi pharetra senectus pretium varius. Vitae
              facilisis tellus fusce maecenas volutpat. Vitae amet hendrerit mi
              tellus netus suscipit iaculis torquent. Donec posuere facilisis
              bibendum turpis tincidunt velit. Habitant eros dignissim metus
              bibendum sociosqu euismod mi molestie habitasse. Bibendum
              elementum fermentum sem litora lobortis. Sem scelerisque tellus
              sagittis consectetur ex senectus a. Euismod malesuada condimentum
              interdum vel eros morbi dapibus. Vitae venenatis nisi sodales
              pharetra fringilla aliquam. Accumsan euismod tincidunt massa urna
              enim penatibus. Fames tempus tristique est ac cras mattis metus.
              Iaculis eros commodo sollicitudin dictumst sit porttitor nam
              fringilla ligula. Ullamcorper donec at fermentum ipsum laoreet,
              felis class. Adipiscing etiam eget parturient suscipit, urna
              maximus dignissim posuere. Eleifend luctus euismod posuere mollis
              torquent inceptos luctus quam magna. Ac enim magna suspendisse
              nostra adipiscing semper tortor. In scelerisque volutpat tempus
              potenti mollis libero. Porttitor nulla potenti cras duis velit
              maximus amet per proin. Mi ullamcorper molestie suscipit class
              orci ornare in per. Laoreet senectus pharetra hac augue mollis leo
              penatibus nisl commodo. Montes turpis nostra ipsum primis nunc
              cras arcu nulla mi. Montes ligula vel fringilla tempor sem tortor
              primis potenti etiam. Nibh eget efficitur vel posuere class erat
              magnis mus. Massa curabitur urna platea quam quis. Rhoncus per
              aliquet sem amet quam, mattis nisl magna? Efficitur finibus
              posuere lorem nostra felis. Urna risus ultrices sollicitudin
              sollicitudin elit. Purus lacus himenaeos sit id ad sollicitudin
              id. Aliquam malesuada volutpat ante felis dis. Natoque varius
              egestas curae nascetur eu ultrices. Mattis cras turpis, duis augue
              augue netus fusce pulvinar. Natoque est nisl nunc vulputate
              curabitur. Tincidunt cras phasellus integer cras suscipit faucibus
              litora? Commodo tempor vel odio enim magna ultrices dui. Sem
              suscipit quis facilisis hac pharetra nunc. Convallis vel vulputate
              leo himenaeos porttitor finibus sollicitudin. Suscipit conubia vel
              diam proin nisl interdum. Condimentum phasellus nunc volutpat erat
              curae curabitur class vel dictumst. Augue convallis elementum quis
              vulputate lectus elementum massa. Magnis integer diam urna
              hendrerit adipiscing scelerisque. Facilisi turpis primis velit
              mollis enim posuere vel inceptos. Magnis facilisis placerat
              scelerisque dictum massa commodo mi.
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            {"Tự do, Đời sống, Sáng tạo".split(", ").map((value, index) => (
              <div
                key={index}
                className="bg-orange-400 rounded-lg text-white w-fit px-2 py-1"
              >
                {value}
              </div>
            ))}
          </div>
          <div className="relative col-span-full bg-white shadow-lg rounded-md px-5 py-6">
            <div className="sticky z-10 w-full flex flex-col gap-6 h-fit">
              <div className="flex gap-1 items-center">
                <div className="relative">
                  <div className="bg-slate-500 rounded-full !w-20 !h-20 aspect-square" />
                </div>
                <div className="py-2 grid grid-cols-5"></div>
                <div className="py-2 flex flex-col ">
                  <div className="text-lg font-bold">Tác giả</div>
                  <div className="line-clamp-2">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Id
                    scelerisque natoque ipsum per primis curabitur natoque
                    praesent? Erat netus amet hac turpis augue efficitur mauris.
                    Cras proin non nunc et mollis quam. Auctor elementum rutrum
                    quis ut mus commodo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-span-full lg:col-span-4 ${
            isCenter ? "flex flex-col" : "lg:flex lg:flex-col"
          } gap-3 max-h-full`}
        >
          <OtherPostWrapper />
          <div
            className={`col-span-full lg:col-span-4 ${
              isCenter ? "grid md:grid-cols-2" : "lg:flex lg:flex-col"
            } gap-3 max-h-full`}
          >
            <RankPost />
            <RankAuthor />
          </div>
        </div>
      </div>
      <div className={`w-full ${isCenter && "md:px-8"}`}>
        <div className="w-full bg-white text-lg shadow-lg rounded-md px-3 py-2">
          Thảo luận
        </div>
      </div>
      <div className={`w-full ${isCenter && "md:px-8"}`}></div>
    </div>
  )
}
