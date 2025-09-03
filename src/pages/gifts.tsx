import { type FC } from "react";
import { ParentComp } from "@/components/parent-comp";
import { motion } from "motion/react";

const giftImg =
  "https://plus.unsplash.com/premium_photo-1663127554127-1f2fd7682180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";

const gifts = [
  {
    id: 1,
    name: "MacBook: 2025 (32 GB)",
    price: "₦3,000,000",
    contribution: "0119803944 (GTB) - Daniel Okolie",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/6228782/1.jpg?9548",
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
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/575078/1.jpg?9333",
    link: "https://www.jumia.com.ng/generic-big-size-non-stick-cooking-pots-with-fry-pan-87057594.html",
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
  },
];

const Gifts: FC = () => {
  return (
    <ParentComp>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl font-amatic font-bold text-center mb-4">
          Our Gift Wishlist
        </h1>
        <p className="text-center pb-8 text-gray-700 max-w-xl">
          Your presence is our greatest joy, but if you’d love to bless us with
          a gift, here are a few thoughtful ideas.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[90%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {gifts.map((gift) => (
          <motion.div
            key={gift.id}
            className="rounded-2xl overflow-hidden shadow-lg border bg-white flex flex-col hover:shadow-xl transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-56 object-contain bg-gray-50 p-4"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="font-semibold text-lg mb-2">{gift.name}</h3>

              {gift.link ? (
                <a
                  href={gift.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Buy This Gift
                </a>
              ) : (
                <div className="bg-gray-100 p-3 rounded-lg w-full text-sm">
                  {gift.price && (
                    <p className="font-medium mb-1">Price: {gift.price}</p>
                  )}
                  {gift.contribution && (
                    <p className="font-medium text-gray-700">
                      Send to: {gift.contribution}
                    </p>
                  )}
                  {gift.note && (
                    <p className="text-xs text-gray-500 mt-1">{gift.note}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ParentComp>
  );
};

export default Gifts;
