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
        title: "Layanan Rumah Tangga",
        icon: IoColorWandSharp,
        content:
            "Dari membersihkan rumah, perbaikan kecil, hingga perawatan taman, mitra kami siap membuat rumah Anda nyaman dan terawat.",
    },
    {
        title: "Layanan Personal & Bisnis",
        icon: FaPalette,
        content:
            "Butuh bantuan untuk tugas-tugas personal atau pekerjaan kantor? Kami menyediakan asisten pribadi, layanan IT, hingga dukungan acara sesuai kebutuhan Anda.",
    },
    {
        title: "Perbaikan & Perawatan",
        icon: FaSprayCan,
        content:
            "Masalah pada kendaraan, elektronik, atau perangkat lainnya? Mitra ahli kami siap memberikan solusi perbaikan dan perawatan yang cepat dan dapat diandalkan.",
    },
    {
        title: "Any Request",
        icon: MdVerified,
        content:
            "Punya permintaan? Cukup sampaikan kepada kami. Kami siap menerima tantangan baru untuk memastikan setiap kebutuhan Anda terpenuhi.",
    }
];

const featuredProducts = [
    {
        id: "fp001",
        title: "Membersihkan rumah",
        imageUrl:"/assets/galeri1.png"
,
    },
    {
        id: "fp002",
        title: "Mengantar Barang",
        imageUrl:"/assets/galeri5.png"

    },
    {
        id: "fp003",
        title: "Jasa Ketik",
        imageUrl:"/assets/galeri2.png"

    },
    {
        id: "fp004",
        title: "Memperbaiki Kendaraan",
        imageUrl:"/assets/galeri6.png"
    },
    {
        id: "fp004",
        title: "Memasang AC",
        imageUrl:"/assets/galeri3.png"

    },
    {
        id: "fp005",
        title: "Membuat Website",
        imageUrl:"/assets/galeri4.png"

    },
];

const AlurKamiBekerja = [
    {
        id: "mps001",
        title: "Sampaikan Kebutuhan Anda",
        description:
            "Sampaikan apapun kebutuhan Anda kepada kami, isi detailnya, dan kami akan segera memproses permintaan Anda",
        icon: <FaBoxes className="text-blue-600 text-4xl mb-4" />,
        imageUrl:"/assets/step1.png"

    },
    {
        id: "mps002",
        title: "Kami carikan mitranya",
        description:
            "Setelah permintaan Anda masuk, sistem kami akan mencocokkan Anda dengan mitra yang sesuai dengan kebutuhan Anda.",
        icon: <FaCogs className="text-green-600 text-4xl mb-4" />,
        imageUrl:"/assets/step2.png"
    },
    {
        id: "mps003",
        title: "Mitra kami akan menghubungi Anda",
        description:
            "Mitra kami akan menghubungi Anda untuk mendiskusikan detail lebih lanjut dan memastikan semua kebutuhan Anda terpenuhi.",
        icon: <FaTint className="text-purple-600 text-4xl mb-4" />,
        imageUrl:"/assets/step3.png"
    },
    {
        id: "mps004",
        title: "Pengerjaan",
        description:
            "Mitra akan datang dan menyelesaikan pekerjaan Anda dengan cepat. ",
        icon: <FaCheckSquare className="text-red-600 text-4xl mb-4" />,
        imageUrl:"/assets/step4.png"
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
    AlurKamiBekerja,
    testimonials,
    faqData,
};
