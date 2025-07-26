import { type FC } from "react";
import { Gift } from "lucide-react";
import { ParentComp } from "@/components/parent-comp";
import giftImg from "@/assets/sample-gift.webp";

const gifts = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Gift Item ${i + 1}`,
  image: giftImg,
  link: "https://example.com/gift-item",
}));

const Gifts: FC = () => {
  return (
    <ParentComp>
      <Gift className="text-yellow-600 mb-2" />

      <h1 className="text-2xl font-bold text-center mb-4">Our Gift Wishlist</h1>

      <p className="text-center pb-8">
        Your presence is our joy, but if you’d love to gift us something special, here are a few ideas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <div key={gift.id} className="rounded-xl overflow-hidden shadow-md border">
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-2">{gift.name}</h3>
              <a
                href={gift.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-700 transition"
              >
                Buy This Gift
              </a>
            </div>
          </div>
        ))}
      </div>
    </ParentComp>
  );
};

export default Gifts;
