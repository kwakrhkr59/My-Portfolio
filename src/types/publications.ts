export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  keywords: string[];
  doi?: string;
  github?: string;
  website?: string;
  citations?: number;
  status: "Published" | "In Review" | "Preprint";
  impact?: string;
  methodology?: string;
  field: string;
}

// export const papers: Paper[] = [
//   {
//     id: "1",
//     title:
//       "Deep Learning Approaches for Automated Medical Image Analysis: A Comprehensive Review",
//     authors: ["John Doe", "Jane Smith", "Michael Johnson"],
//     journal: "Nature Machine Intelligence",
//     year: 2024,
//     abstract:
//       "This comprehensive review examines the latest advances in deep learning for medical image analysis, covering CNN architectures, transformer models, and their applications across radiology, pathology, and clinical diagnostics. We analyze over 200 recent papers and provide insights into current challenges and future directions in healthcare AI.",
//     keywords: [
//       "Deep Learning",
//       "Medical Imaging",
//       "CNN",
//       "Computer Vision",
//       "Healthcare AI",
//     ],
//     doi: "10.1038/s42256-024-00001-1",
//     github: "https://github.com/username/medical-ai-review",
//     website: "https://medical-ai-review.com",
//     citations: 45,
//     status: "Published",
//     impact:
//       "Cited by 45+ researchers, featured in Nature AI newsletter, adopted by 3 medical institutions",
//     methodology:
//       "Systematic literature review of 200+ papers, meta-analysis, expert interviews",
//     field: "Medical AI",
//   },
//   {
//     id: "2",
//     title:
//       "Quantum-Enhanced Machine Learning for Drug Discovery: Novel Algorithms and Applications",
//     authors: ["John Doe", "Alice Brown"],
//     journal: "Science Advances",
//     year: 2024,
//     abstract:
//       "We present novel quantum machine learning algorithms for molecular property prediction and drug-target interaction modeling, demonstrating significant improvements over classical approaches in pharmaceutical research. Our quantum variational classifier achieves 92% accuracy on molecular binding prediction tasks.",
//     keywords: [
//       "Quantum Computing",
//       "Drug Discovery",
//       "Machine Learning",
//       "Molecular Modeling",
//       "QAOA",
//     ],
//     doi: "10.1126/sciadv.2024.001",
//     github: "https://github.com/username/quantum-drug-discovery",
//     citations: 23,
//     status: "Published",
//     impact:
//       "Collaboration with 3 pharmaceutical companies initiated, featured in IBM Quantum blog",
//     methodology:
//       "Quantum circuit design, molecular simulation, hybrid classical-quantum optimization",
//     field: "Quantum ML",
//   },
//   {
//     id: "3",
//     title:
//       "Sustainable AI: Energy-Efficient Neural Network Architectures for Edge Computing",
//     authors: ["John Doe", "Sarah Wilson", "David Lee", "Emma Davis"],
//     journal: "IEEE Transactions on Green Computing",
//     year: 2024,
//     abstract:
//       "This paper introduces novel neural network pruning techniques and lightweight architectures specifically designed for edge devices, achieving 90% energy reduction while maintaining competitive accuracy. We propose EcoNet, a family of green neural architectures optimized for mobile and IoT deployments.",
//     keywords: [
//       "Green AI",
//       "Edge Computing",
//       "Neural Network Optimization",
//       "Sustainability",
//       "Model Compression",
//     ],
//     doi: "10.1109/TGC.2024.001",
//     github: "https://github.com/username/sustainable-ai",
//     website: "https://econet-ai.org",
//     citations: 12,
//     status: "In Review",
//     impact:
//       "Adopted by 2 major tech companies for mobile applications, 50% energy savings demonstrated",
//     methodology:
//       "Network pruning, quantization, hardware optimization, energy profiling",
//     field: "Green Computing",
//   },
// ];
