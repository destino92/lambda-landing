import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "Section 1: Foundations of AI Infrastructure",
    content: [
      {
        id: "1",
        title: "Module 1 : Introduction to AI Infrastructure",
        description: [
          "What is AI infrastructure and why it matters",
          "Overview of key AI frameworks and tools (TensorFlow, PyTorch, Jupyter, etc.)",
          "Cloud vs. on-premises infrastructure for AI",
        ]
      },
      {
        id: "2",
        title: "Module 2 : Understanding Compute Needs for AI",
        description: [
          "CPUs, GPUs, TPUs: Which to choose and why",
          "Scalability and elasticity in AI workloads",
        ]
      },
      {
        id: "3",
        title: "Module 3 : Data Storage and Management for AI",
        description: [
          "Designing storage solutions for high-performance AI",
          "Data lakes vs. data warehouses",
          "Data preprocessing pipelines"
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Section 2: Cloud and On-Premises AI Infrastructure",
    content: [
      {
        id: "1",
        title: "Module 4 : Building AI Infrastructure in the Cloud",
        description: [
          "Setting up AI environments on AWS, Azure, and GCP",
          "Cost management and optimization strategies",
        ]
      },
      {
        id: "2",
        title: "Module 5 : Containerization and Orchestration",
        description: [
          "Introduction to Docker for AI workloads",
          "Managing distributed AI tasks with Kubernetes",
        ]
      },
      {
        id: "3",
        title: "Module 6 : On-Premises AI Infrastructure",
        description: [
          "Building AI servers: hardware and software",
          "Hybrid infrastructure: When and why",
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Section 3: AI Model Training Infrastructure",
    content: [
      {
        id: "1",
        title: "Module 7 : Efficient Training Techniques",
        description: [
          "Distributed training: Data parallelism vs. model parallelism",
          "Optimizing training performance with mixed precision",
        ]
      },
      {
        id: "2",
        title: "Module 8 : Experiment Tracking and Versioning",
        description: [
          "Tools for managing experiments (MLflow, Weights & Biases)",
          "Automating version control for datasets and models",
        ]
      },
      {
        id: "3",
        title: "Module 9 : Hyperparameter Optimization at Scale",
        description: [
          "Using grid search and random search efficiently",
          "AI-driven hyperparameter tuning",
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Section 4: AI Deployment and Monitoring",
    content: [
      {
        id: "1",
        title: "Module 10 : Serving AI Models in Production",
        description: [
          "Model serving frameworks (TensorFlow Serving, TorchServe, etc.)",
          "REST APIs vs. gRPC for AI services",
        ]
      },
      {
        id: "2",
        title: "Module 11 : Building Scalable AI Pipelines",
        description: [
          "CI/CD for AI models",
          "Monitoring model performance and retraining",
        ]
      },
      {
        id: "3",
        title: "Module 12 : MLOps Fundamentals",
        description: [
          "Bridging the gap between data scientists and operations",
          "Setting up AI workflows for repeatability and reliability",
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Section 5: Advanced Topics in AI Infrastructure",
    content: [
      {
        id: "1",
        title: "Module 13 : Scaling AI with Distributed Systems",
        description: [
          "Frameworks for distributed AI (Ray, Horovod)",
          "Large-scale model training with GPUs and TPUs",
        ]
      },
      {
        id: "2",
        title: "Module 14 : Security in AI Infrastructure",
        description: [
          "Protecting models, data, and pipelines",
          "Addressing vulnerabilities in AI workflows",
        ]
      },
      {
        id: "3",
        title: "Module 15 : Sustainability in AI",
        description: [
          "Energy-efficient training methods",
          "Designing green AI infrastructure",
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Section 6: Hands-On Capstone Projects",
    content: [
      {
        id: "1",
        title: "Module 16 : Build and Deploy an AI Application",
        description: [
          "Participants will design, train, and deploy an AI model",
          "Apply concepts like distributed training, containerization, and monitoring",
        ]
      },
      {
        id: "2",
        title: "Module 17 : Optimize an AI Infrastructure for Cost and Performance",
        description: [
          "Real-world scenario: Reducing cloud costs for a production model",
        ]
      }
    ]
  },
];

function Programs() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionTrigger className="py-2 text-[15px] font-bold leading-6 hover:no-underline text-[#4027ff]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-black">
              {item.content.map((subItem) => (
                <div key={subItem.id} className="mb-2 ml-5">
                  <h6 className="text-lg font-semibold"><span className="bg-black text-white px-2 inline-block">{subItem.title}</span></h6>
                  <ul className="list-disc pl-5">
                    {subItem.description.map((desc, index) => (
                      <li className="" key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { Programs };