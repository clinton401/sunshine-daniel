import { motion } from "motion/react";
import { ParentComp } from "../components/parent-comp";

export default function Story() {
  const tidbits = [
    {
      question: "How did you first meet?",
      answer: "We met while waiting for a bus in Lagos. Fate put us side by side."
    },
    {
      question: "Who made the first move? How?",
      answer: "He did—he sent a Happy New Year text, and a few hours later we had dinner plans."
    },
    {
      question: "Who's going to take out the trash?",
      answer: "Whoever is closer to it at the time!"
    },
    {
      question: "What was your most memorable date?",
      answer: "Kayaking at Lekki. It was both fun and a real test of patience—we passed!"
    },
    {
      question: "What's your favorite activity together?",
      answer: "Exploring food spots in Lagos and evening walks at the park."
    },
    {
      question: "Where are you going for your honeymoon?",
      answer: "We’d love to spend it in Calabar or Obudu with beautiful views."
    },
    {
      question: "What's the best meal you have eaten together?",
      answer: "A rich plate of pounded yam with egusi soup in Abuja."
    },
    {
      question: "What's the most memorable trip you have taken together?",
      answer: "Visiting Yankari Game Reserve. It was incredible!"
    },
    {
      question: "We’re on the same page about",
      answer: "Spending time with the people we love most."
    }
  ];

    return (
      <ParentComp>
        <section className="max-w-4xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-amatic font-bold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed font-josefin text-gray-700">
              The first time I saw him, we were both sitting at the same bus
              terminal in Lagos. I remember thinking,{" "}
              <span className="italic">Oh wow, he’s cute.</span> When I got to
              my seat, the spot beside me was empty and I thought, how amazing
              would it be if he sat there? Well, he did. We started talking, he
              asked for my number, and I was sure I’d never hear from him again.
              A few months later he texted me “Happy New Year,” and it felt like
              we picked up right where we left off.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-3xl font-semibold mb-8 font-amatic">Tidbits</h3>
            <ul className="space-y-6">
              {tidbits.map((item, index) => (
                <li key={index} className=" pb-4">
                  <p className="font-medium text-lg text-gray-900 font-josefin">
                    {item.question}
                  </p>
                  <p className="text-gray-700 mt-1">{item.answer}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </ParentComp>
    );
}
