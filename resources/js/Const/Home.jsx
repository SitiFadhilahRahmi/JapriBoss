import { FaBoxes, FaCheckSquare, FaCogs, FaTint } from "react-icons/fa";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaPalette,
    FaSprayCan,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { IoColorWandSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const services = [
    {
        title: "Fabric Manufacturing",
        icon: IoColorWandSharp,
        content:
            "From raw materials to finished fabrics, we specialize in cotton for various applications.",
    },
    {
        title: "Custom Textile Solutions",
        icon: FaPalette,
        content:
            "Collaborate with our team to develop bespoke textile solutions tailored to your specific requirements and designs.",
    },
    {
        title: "Dyeing & Finishing",
        icon: FaSprayCan,
        content:
            "Utilizing advanced techniques, we offer a wide range of dyeing and finishing options to achieve desired textures, colors, and functionalities.",
    },
    {
        title: "Quality Assurance",
        icon: MdVerified,
        content:
            "Rigorous quality control at every stage ensures our textiles meet international standards and exceed client expectations.",
    },
];

const featuredProducts = [
    {
        id: "fp001",
        name: "Eco-Blend Performance Fabric",
        category: "Man Shoes",
        description:
            "A sustainable blend of recycled polyester and organic cotton, offering exceptional durability, breathability, and a soft hand-feel. Ideal for activewear and casual apparel.",
        imageUrl:
            "https://placehold.co/600x600/A8DADC/2F4F4F?text=Eco-Blend+Fabric",
        link: "/products/eco-blend-performance-fabric",
    },
    {
        id: "fp002",
        name: "Premium Silk Twill",
        category: "Women Bag",
        description:
            "Luxurious 100% silk twill, known for its elegant drape, subtle sheen, and vibrant color absorption. Perfect for high-end fashion, scarves, and decorative applications.",
        imageUrl:
            "https://placehold.co/600x600/F4A261/2F4F4F?text=Premium+Silk+Twill",
        link: "/products/premium-silk-twill",
    },
    {
        id: "fp003",
        name: "Industrial Grade Canvas",
        category: "Sport Shoes",
        description:
            "Heavy-duty cotton canvas treated for water and tear resistance. Engineered for demanding industrial applications, outdoor gear, and durable bags.",
        imageUrl:
            "https://placehold.co/600x600/2A9D8F/2F4F4F?text=Industrial+Canvas",
        link: "/products/industrial-grade-canvas",
    },
    {
        id: "fp004",
        name: "Smart Textile - Temperature Regulating",
        category: "Military Uniform",
        description:
            "An innovative fabric infused with phase-change materials that actively regulate body temperature, providing comfort in varying climates. Ideal for specialized apparel and bedding.",
        imageUrl:
            "https://placehold.co/600x600/E76F51/2F4F4F?text=Smart+Textile",
        link: "/products/smart-textile-temp-regulating",
    },
];

const manufacturingProcessSteps = [
    {
        id: "mps001",
        title: "Sustainable Material Sourcing",
        description:
            "Our commitment begins with carefully selected raw materials. We prioritize sustainable and ethically sourced fibers.",
        icon: <FaBoxes className="text-blue-600 text-4xl mb-4" />, // Icon for raw materials/sourcing
        imageUrl:
            "https://placehold.co/600x400/90EE90/333333?text=Material+Sourcing",
    },
    {
        id: "mps002",
        title: "Advanced Weaving & Knitting",
        description:
            "Utilizing state-of-the-art machinery and skilled artisans, we transform raw fibers into high-quality fabrics. ",
        icon: <FaCogs className="text-green-600 text-4xl mb-4" />, // Icon for machinery/process
        imageUrl:
            "https://placehold.co/600x400/ADD8E6/333333?text=Weaving+Knitting",
    },
    {
        id: "mps003",
        title: "Precision Dyeing & Finishing",
        description:
            "Our fabrics undergo meticulous dyeing and finishing processes. We employ eco-friendly dyes and innovative treatments to achieve vibrant colors.",
        icon: <FaTint className="text-purple-600 text-4xl mb-4" />, // Icon for dyeing/finishing
        imageUrl:
            "https://placehold.co/600x400/FFB6C1/333333?text=Dyeing+Finishing",
    },
    {
        id: "mps004",
        title: "Rigorous Quality Control",
        description:
            "Every meter of fabric is subjected to stringent quality checks. From thread count to colorfastness and strength.",
        icon: <FaCheckSquare className="text-red-600 text-4xl mb-4" />, // Icon for quality check
        imageUrl:
            "https://placehold.co/600x400/FFD700/333333?text=Quality+Control",
    },
];

const socialMedia = [
    {
        platform: "Instagram",
        icon: FaInstagram,
    },
    {
        platform: "X",
        icon: FaXTwitter,
    },
    {
        platform: "Facebook",
        icon: FaFacebook,
    },
    {
        platform: "Github",
        icon: FaGithub,
    },
    {
        platform: "Youtube",
        icon: FaYoutube,
    },
];

const testimonials = [
    {
        id: "t001",
        quote: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
        author: "Leslie Alexander",
        handle: "@lesliealexander",
        avatar: "https://placehold.co/100x100/A8DADC/2F4F4F?text=LA",
    },
    {
        id: "t002",
        quote: "“Integer id nunc sit semper purus. Bibendum at locus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”",
        author: "Brenna Goyette",
        handle: "@brennagoyette",
        avatar: "https://placehold.co/100x100/F4A261/2F4F4F?text=BG",
        logo: "https://placehold.co/50x20/E9C46A/2F4F4F?text=Logo", // Example for a company logo next to a testimonial
    },
    {
        id: "t003",
        quote: "“Molestias ea earum quos nostrum doloremque sed. Quiderat quasi aut velit incidunt excepturi rerum voluptatem minus harum.”",
        author: "Leonard Krasner",
        handle: "@leonardkrasner",
        avatar: "https://placehold.co/100x100/2A9D8F/2F4F4F?text=LK",
    },
    {
        id: "t004",
        quote: "“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.”",
        author: "Michael Foster",
        handle: "@michaelfoster",
        avatar: "https://placehold.co/100x100/E76F51/2F4F4F?text=MF",
    },
    {
        id: "t005",
        quote: "“Aut reprehenderit voluptatem eum asperiores beatae id, iure molestiae ipsam ut officia rem nulla blanditiis.”",
        author: "Lindsay Walton",
        handle: "@lindsaywalton",
        avatar: "https://placehold.co/100x100/A8DADC/2F4F4F?text=LW",
    },
    {
        id: "t006",
        quote: "“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.”",
        author: "Tom Cook",
        handle: "@tomcook",
        avatar: "https://placehold.co/100x100/F4A261/2F4F4F?text=TC",
    },
    {
        id: "t007",
        quote: "“Architecto libero natus est, Est quam debitis officia enim atque et ut non. Sint reiciendis quasi eaque, Itaque error ut et.”",
        author: "Floyd Miles",
        handle: "@floydmiles",
        avatar: "https://placehold.co/100x100/2A9D8F/2F4F4F?text=FM",
    },
    {
        id: "t008",
        quote: "“Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut qui eum fugit. Laborum autem inventore ut voluptate.”",
        author: "Dries Vincent",
        handle: "@driesvincent",
        avatar: "https://placehold.co/100x100/E76F51/2F4F4F?text=DV",
    },
    {
        id: "t009",
        quote: "“Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.”",
        author: "Courtney Henry",
        handle: "CEO of Workcation",
        avatar: "https://placehold.co/100x100/A8DADC/2F4F4F?text=CH",
    },
];

const faqData = [
    {
        category: "General Inquiries",
        content: [
            {
                question: "What types of fabrics do you manufacture?",
                answer: "We specialize in a wide range of fabrics including natural fibers like cotton and linen, synthetic fibers such as polyester and nylon, and various blends to meet diverse industry needs.",
            },
            {
                question: "Do you offer custom textile solutions?",
                answer: "Yes, absolutely! We pride ourselves on our ability to develop bespoke textile solutions.\n Our team works closely with clients from concept to production to create fabrics tailored to specific designs, functionalities, and requirements.",
            },
            {
                question: "What is your minimum order quantity (MOQ)?",
                answer: "Our MOQ varies depending on the fabric type, complexity of design, and specific manufacturing processes involved. Please contact our sales team with your project details for a precise quote and MOQ information.",
            },
        ],
    },
    {
        category: "Production & Quality",
        content: [
            {
                question: "What quality control measures do you have in place?",
                answer: "We implement rigorous quality control at every stage of production, from raw material inspection to final product testing. Our processes adhere to international quality standards to ensure consistency, durability, and performance.",
            },
            {
                question: "How long does the manufacturing process take?",
                answer: "Production timelines depend on the order volume, fabric complexity, and current production schedule. We strive for efficient turnaround times and will provide an estimated delivery date upon order confirmation.",
            },
            {
                question: "Can I get samples of your fabrics?",
                answer: "Yes, we offer fabric samples for quality assessment and design validation. Please reach out to our team to request samples for your specific needs.",
            },
        ],
    },
    {
        category: "Sustainability & Ethics",
        content: [
            {
                question: "What are your sustainability practices?",
                answer: "We are committed to sustainable manufacturing. This includes sourcing eco-friendly materials, minimizing waste through efficient processes, reducing water and energy consumption, and ensuring ethical labor practices throughout our supply chain.",
            },
            {
                question: "Are your products certified organic or recycled?",
                answer: "We offer a selection of fabrics that are certified organic (e.g., GOTS) or made from recycled materials (e.g., GRS). Please inquire about specific certifications for the products you are interested in.",
            },
        ],
    },
];

export {
    services,
    featuredProducts,
    socialMedia,
    manufacturingProcessSteps,
    testimonials,
    faqData,
};
