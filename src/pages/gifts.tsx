import { type FC } from "react";
import { Gift } from "lucide-react";
import { ParentComp } from "@/components/parent-comp";
const giftImg =
  "https://plus.unsplash.com/premium_photo-1663127554127-1f2fd7682180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdHN8ZW58MHx8MHx8fDA%3D";

const gifts = [
  {
    id: 1,
    name: "MacBook: 2025 (32 GB)",
    price: "₦3,000,000",
    contribution: "0119803944 (GTB) - Daniel Okolie",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/6228782/1.jpg?9548",
    link: null, // no link provided
  },
  {
    id: 2,
    name: "Podcast Microphone",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/4199104/1.jpg?2126",
    link: "https://www.jumia.com.ng/generic-shure-sm7b-microphone-ocal-dynamic-studio-mic-for-broadcast-podcast-recording-gaming-streaming-xlr-rugged-construction-detachable-windscreen-smooth-sound-warm-vocals-wide-range-frequency-401991446.html",
  },
  {
    id: 3,
    name: "Honeymoon Support",
    contribution: "3092298852 (FirstBank) - Mercy Adekunle",
    image: giftImg,
    link: null,
  },
  {
    id: 4,
    name: "Towel Set",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/949977/1.jpg?3747",
    link: "https://www.jumia.com.ng/generic-3-set-of-large-extra-absorbent-100-cotton-77994976.html",
  },
  {
    id: 5,
    name: "Bedside Lamps",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/6732083/1.jpg?4271",
    link: "https://www.jumia.com.ng/generic-battery-poweredusb-rechargeable-led-moon-light-night-decor-380237688.html",
  },
  {
    id: 6,
    name: "Blender",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/4446392/1.jpg?4943",
    link: "https://www.jumia.com.ng/qasa-high-power-blender-1200w-with-sus-grinder-qbl-8008-pro2-293644468.html",
  },
  {
    id: 7,
    name: "Iron Board",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/226044/2.jpg?9256",
    link: "https://www.jumia.com.ng/generic-dual-function-ironing-board-with-3-step-ladder-44062298.html",
  },
  {
    id: 8,
    name: "Non-stick Pot Set",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/6785552/1.jpg?9217",
    link: "https://www.jumia.com.ng/tower-big-3-pcs-cooking-pot-tower-gold-silver-generic-mpg3163864.html",
  },
  {
    id: 9,
    name: "Shop for Any Book",
    image:
      "https://rhbooks.com.ng/storage/2025/08/Untitled-design-82-600x720.png",
    link: "https://rhbooks.com.ng/?srsltid=AfmBOoqpd9dNamskRPS5XjVk2FbL8SMJNgSpFoDPQ8GS2aU9-CZa4OvT",
  },
  {
    id: 10,
    name: "Cash Gift",
    contribution: "3092298852 (FirstBank) - Mercy Adekunle",
    note: "Send receipt to 08168559506",
    image: giftImg,
    link: null,
  },
];




const Gifts: FC = () => {
  return (
    <ParentComp>
      <Gift className="text-yellow-600 mb-2" />

      <h1 className="text-2xl font-bold text-center mb-4">Our Gift Wishlist</h1>

      <p className="text-center pb-8">
        Your presence is our joy, but if you’d love to gift us something
        special, here are a few ideas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className="rounded-xl overflow-hidden shadow-md border"
          >
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-52 object-contain"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="font-semibold text-lg mb-2">{gift.name}</h3>

              {/* If link exists, show "Buy This Gift" button */}
              {gift.link ? (
                <a
                  href={gift.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-700 transition"
                >
                  Buy This Gift
                </a>
              ) : (
                /* Otherwise show contribution info */
                <div className="bg-gray-100 p-3 rounded-md w-full">
                  {gift.price && (
                    <p className="text-sm font-medium mb-1">
                      Price: {gift.price}
                    </p>
                  )}
                  {gift.contribution && (
                    <p className="text-sm font-medium text-gray-700">
                      Send to: {gift.contribution}
                    </p>
                  )}
                  {gift.note && (
                    <p className="text-xs text-gray-500 mt-1">{gift.note}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ParentComp>
  );
};


export default Gifts;
