import Accordian from "../reusable/Accordian";

export default function Faqs() {
  const faqData = [
    {
      id: 1,
      title: "What is Quills.ai?",
      description:
        "Quills.ai is an advanced chatbot designed to assist with data queries, database integration, and CSV file handling. It streamlines data-related tasks and provides valuable insights.",
    },
    {
      id: 2,
      title: "How can I get started with Quills.ai?",
      description:
        "Getting started with Quills.ai is easy! Simply sign up for an account, choose a pricing plan, and start using our chatbot to simplify your data workflows.",
    },
    {
      id: 3,
      title: "Is Quills.ai compatible with my data storage systems?",
      description:
        "Yes, Quills.ai seamlessly integrates with various databases, including SQL, NoSQL, and cloud-based storage. It's designed to work with a wide range of data systems.",
    },
    {
      id: 4,
      title: "What kind of support do you offer?",
      description:
        "We offer email support to all users, and our Pro and Enterprise plans include priority support. Our dedicated support team is here to assist you with any questions or issues.",
    },
  ];
  return (
    <div className="flex flex-col gap-1 m-[100px]">
      {faqData.map((data) => (
        <Accordian
          key={data.id}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
}
