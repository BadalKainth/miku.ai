import classes from "./page.module.css";
import Image from "next/image";
import threeChat from "../assets/images/threeChat.png";

export default function Home() {
  return (
    <main>
      <section className={classes.homeSection}>
        <Image src={threeChat} alt="Img" className={classes.chatImg} />
        <div className={classes.information}>
          <h1 className={classes.title}>Miku-AI</h1>
          <h3 className={classes.subtitle}>
            Use Chat-GPT on your{" "}
            <span className={classes.highlight}>WhatsApp!</span>{" "}
          </h3>
          <p>
            We&apos;ve created Miku-AI, which uses the latest milestone in
            OpenAI&apos;s effort in scaling up deep learning(GPT-4) and provide
            answers on WhatsApp directly. GPT-4 is a large multimodal model
            (accepting image and text inputs, emitting text outputs) that, while
            less capable than humans in many real-world scenarios, exhibits
            human-level performance on various professional and academic
            benchmarks.
          </p>
          <a href="https://wa.me/+918297556067" className={classes.chatBtn}>
            TRY ON YOUR WHATSAPP
          </a>
        </div>
      </section>
    </main>
  );
}
