export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Do I need previous driving experience?",
    answer: "No. Beginner training is available for people starting from scratch. Our instructors guide you through every step at your own pace.",
  },
  {
    question: "Do you offer refresher classes?",
    answer: "Yes. Refresher lessons are suitable for licensed drivers who want to regain confidence after a break from driving.",
  },
  {
    question: "Can I learn parking?",
    answer: "Yes. Parking and manoeuvring — including reverse and parallel parking — can be included as part of practical training.",
  },
  {
    question: "Do you provide highway training?",
    answer: "Advanced learners can receive highway-driving training depending on their readiness and confidence level.",
  },
  {
    question: "How long does it take to learn?",
    answer: "The duration depends on the learner's experience, confidence and practice frequency. Most learners see steady progress within a few weeks.",
  },
  {
    question: "Are weekend classes available?",
    answer: "Yes. Training schedules can be arranged based on availability, including weekend slots.",
  },
];
