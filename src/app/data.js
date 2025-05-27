// products.js
const products = [
  {
    title: "Best Quality Cement",
    image: "/images/cement.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Pipes",
    image: "/images/pipes.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Wood",
    image: "/images/wood.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Heterogenous Sheets",
    image: "/images/sheets.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Ladders",
    image: "/images/ladder.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Dry cooling technology",
    image: "/images/cooling.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality 3D Leather Wall Panel",
    image: "/images/wallpanel.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Plastering Material",
    image: "/images/plaster.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
  {
    title: "Best Quality Cassette Air Conditioner",
    image: "/images/ac.png",
    description:
      "A standard 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
  },
];

export default products;

export const socialIcons = [
  "/icons/fb.svg",
  "/icons/x.svg",
  "/icons/linkdedin.svg",
  "/icons/insta.svg",
  "/icons/yt.svg",
];
// featurePanels.js
export const featurePanels = [
  {
    id: "trusted-suppliers",
    title: "Verified and Trusted Suppliers",
    description:
      "We ensure that all suppliers go through a strict verification process before being listed on our platform.",
    image: "/images/trusted.png", // Path to your badge image
  },
  {
    id: "secure-payment",
    title: "Secure Payment & Transactions",
    description:
      "Integrated payment gateways like Amazon Payment Services and 2Checkout provide a safe and efficient way to make transactions.",
    image: "/images/payment.png", // Path to your shield icon
  },
  {
    id: "building-materials",
    title: "Wide Range of Building Materials",
    description:
      "Users can find everything they need, from cement, steel, and bricks to electrical fittings and finishing materials.",

    image: "/images/material.png", // Path to your materials image
  },
];

export const categories = [
  "Interior Finishes",
  "ventilation and air conditioning",
  "Plumbing",
  "Chen Fitting",
  "Structure & Concrete work",
];

export const brands = [
  {
    name: "JDFF",
    label: "JDFF BRANDS",
    image: "/images/jdff.png",
  },
  {
    name: "LUMINUS",
    label: "LUMINUS BRANDS",
    image: "/images/luminius.png",
  },
  {
    name: "Schreder",
    label: "Schreder BRANDS",
    image: "/images/schreder.png",
  },
  {
    name: "1NUO",
    label: "1NUO BRANDS",
    image: "/images/1nuo.png",
  },
  {
    name: "2M KABLO",
    label: "2M KABLO BRANDS",
    image: "/images/2mkablo.png",
  },
  {
    name: "2VV",
    label: "2VV BRANDS",
    image: "/images/2vv.png",
  },
  {
    name: "100TONG",
    label: "100TONG BRANDS",
    image: "/images/100tong.png",
  },
  {
    name: "3M",
    label: "3MM BRANDS",
    image: "/images/3m.png",
  },
  {
    name: "7 Stars",
    label: "7 Stars BRANDS",
    image: "/images/7stars.png",
  },
];

export const data = [
  { id: 1023, item: "Steel", supplier: "John Doe", status: "Approve" },
  { id: 1024, item: "Wood", supplier: "Mark Smith", status: "Pending" },
  { id: 1025, item: "Sheets", supplier: "Sarah", status: "Pending" },
  { id: 1026, item: "Ladders", supplier: "Emily Brown", status: "Pending" },
  { id: 1027, item: "Steel", supplier: "Mark Smith", status: "Approve" },
  { id: 1028, item: "Steel", supplier: "John Smith", status: "Approve" },
  { id: 1029, item: "Wood", supplier: "John Doe", status: "Approve" },
];
export const suppliers = [
  {
    category: "Global Supplier",
    quoteId: "#1023",
    productName: "Wood",
    price: "$200",
    discount: "5%",
    delivery: "4 Days",
    rating: 2.5,
  },
  {
    category: "Material Supplier",
    quoteId: "#1024",
    productName: "Steel",
    price: "$150",
    discount: "10%",
    delivery: "5 Days",
    rating: 3.5,
  },
  {
    category: "Building Suppliers",
    quoteId: "#1025",
    productName: "Cement",
    price: "$250",
    discount: "15%",
    delivery: "7 Days",
    rating: 4.5,
  },
];
export const orders = [
  {
    quoteId: "1023",
    customer: "Mark Smith",
    name: "Steel",
    date: "1 March, 2025",
    supplier: "John Doe",
    status: "Shipped",
    paymentStatus: "Paid",
  },
  {
    quoteId: "1024",
    customer: "Mark Smith",
    name: "Steel",
    date: "2 March, 2025",
    supplier: "Mark Smith",
    status: "Pending",
    paymentStatus: "Paid",
  },
  {
    quoteId: "1025",
    customer: "Mark Smith",
    name: "Steel",
    date: "2 March, 2025",
    supplier: "Sarah",
    status: "Pending",
    paymentStatus: "Paid",
  },
  {
    quoteId: "1026",
    customer: "Mark Smith",
    name: "Steel",
    date: "2 March, 2025",
    supplier: "Emily Brown",
    status: "Pending",
    paymentStatus: "Paid",
  },
  {
    quoteId: "1027",
    customer: "Mark Smith",
    name: "Steel",
    date: "2 March, 2025",
    supplier: "Mark Smith",
    status: "Shipped",
    paymentStatus: "Paid",
  },
  {
    quoteId: "1028",
    customer: "Mark Smith",
    name: "Steel",
    date: "2 March, 2025",
    supplier: "John Smith",
    status: "Shipped",
    paymentStatus: "Paid",
  },
  {
    quoteId: "1029",
    customer: "Mark Smith",
    name: "Steel",
    date: "2 March, 2025",
    supplier: "John Doe",
    status: "Shipped",
    paymentStatus: "Paid",
  },
];
export const invoices = [
  {
    item: "Steel",
    invoiceId: "INV001",
    amount: "$500",
    dueDate: "1 March, 2025",
    status: "Pending",
    action: "Pay Now",
  },
  {
    item: "Wood",
    invoiceId: "INV002",
    amount: "$1000",
    dueDate: "2 March, 2025",
    status: "Completed",
    action: "",
  },
  {
    item: "Sheets",
    invoiceId: "INV003",
    amount: "$1500",
    dueDate: "2 March, 2025",
    status: "Completed",
    action: "",
  },
  {
    item: "Cement",
    invoiceId: "INV004",
    amount: "$2000",
    dueDate: "2 March, 2025",
    status: "Completed",
    action: "",
  },
];
export const employeePermissions = [
  {
    name: "John Doe",
    role: "Sales Manager",
    permissions: "Can Edit Quotes & Orders",
    status: "Active",
  },
  {
    name: "Sarah",
    role: "Support Staff",
    permissions: "Can View Quotes Only",
    status: "Active",
  },
  {
    name: "Mark Smith",
    role: "Accountant",
    permissions: "Can Manage Payment",
    status: "Inactive",
  },
];

export const inquiryRequests = [
  {
    id: 1022,
    customerName: "John Doe",
    uploadFile: "Project.pdf",
    productName: "Steel",
    status: "Send",
  },
  {
    id: 1023,
    customerName: "Sarah",
    uploadFile: "Project.pdf",
    productName: "Wood",
    status: "Pending",
  },
  {
    id: 1024,
    customerName: "Mark Smith",
    uploadFile: "Project.pdf",
    productName: "Cement",
    status: "Send",
  },
];
