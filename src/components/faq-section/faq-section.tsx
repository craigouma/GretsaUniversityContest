import React from "react";
import FAQ from "@/components/faq/FAQ";
import styles from "./faq-section.module.scss";

const FaqSection = () => {
  return (
    <section className={styles.faq}>
      <h3 className={styles.faqTitle}>Lets answer some of your burning questions</h3>
      <p className={styles.faqSubtext}>Check out our most asked questions here, mfjpm 😑🤚🏾</p>
      <div className={styles.faqQuestions}>
        <FAQ
          question='How can we get TSticks to do giveaway by morning?'
          answer='Threaten him ez'
        />
        <FAQ
          question='How can we get TSticks to do giveaway by morning?'
          answer='Threaten him ez'
        />
        <FAQ
          question='How can we get TSticks to do giveaway by morning?'
          answer='Threaten him ez'
        />
        <FAQ
          question='How can we get TSticks to do giveaway by morning?'
          answer='Threaten him ez'
        />
      </div>
    </section>
  );
};

export default FaqSection;
