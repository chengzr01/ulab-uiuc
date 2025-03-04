const about = "Welcome to UIUC U Lab!";

const highlights = [
  {
    title: "LLM Quantization",
    description:
      "Enabling on-device LLM inference with advanced quantization techniques like AWQ, TinyChat, SmoothQuant, and COAT for improved efficiency and performance.",
    projects: ["AWQ", "TinyChat", "SmoothQuant", "COAT"],
  },
  {
    title: "Long Context LLM",
    description:
      "Developing methods to generate infinite-length texts with fixed memory budgets, including StreamingLLM, Quest, DuoAttention, and LServe.",
    projects: ["StreamingLLM", "Quest", "DuoAttention", "LServe"],
  },
  {
    title: "Efficient Visual Generation",
    description:
      "Advanced visual generation models like HART, SANA, SVDQuant for high-quality image synthesis under computational constraints.",
    projects: ["HART", "SANA", "SVDQuant"],
  },
];

const news = [
  {
    time: "Jan 2025",
    event: "GrouphRouter is accepted at ICLR 2025.",
  },
  {
    time: "Jan 2025",
    event: "GraphEval is accepted at ICLR 2025.",
  },
];

const impacts =
  " We actively collaborate with industry partners including Amazon and Meta.";

export { about, highlights, news, impacts };
