import type { IconName } from "@/components/Icon";

export const nav = [
  { label: "Services", href: "#services" },
  { label: "IoT & Smart Home", href: "#iot" },
  { label: "BMS Analytics", href: "#bms" },
  { label: "Cloud", href: "#cloud" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "50+", label: "Products delivered" },
  { value: "1M+", label: "Device messages / day" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Monitoring & support" },
];

export const services: {
  icon: IconName;
  title: string;
  text: string;
  tags: string[];
}[] = [
  {
    icon: "android",
    title: "Android Development",
    text: "Native Android apps in Kotlin and Jetpack Compose, built for performance, offline use and Play Store quality.",
    tags: ["Kotlin", "Compose", "Play Store"],
  },
  {
    icon: "apple",
    title: "iOS Development",
    text: "Polished native iPhone and iPad apps in Swift and SwiftUI, with App Store delivery handled end to end.",
    tags: ["Swift", "SwiftUI", "App Store"],
  },
  {
    icon: "react",
    title: "React Native Apps",
    text: "One codebase for Android and iOS with native feel, shipping faster and at a lower total cost.",
    tags: ["React Native", "Expo", "TypeScript"],
  },
  {
    icon: "server",
    title: "Backend Development",
    text: "Scalable APIs, microservices and real-time systems with secure auth, queues and clean data models.",
    tags: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: "layout",
    title: "Frontend Development",
    text: "Fast, accessible web apps and dashboards built with React and Next.js, designed to convert and scale.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    text: "Infrastructure as code, CI/CD, containers and observability on AWS, Azure and GCP.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
];

export const iotFeatures: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "chip",
    title: "Device & firmware integration",
    text: "ESP32, STM32 and gateway integration over MQTT, BLE, Zigbee, Modbus and LoRaWAN.",
  },
  {
    icon: "home",
    title: "Smart home solutions",
    text: "Lighting, climate, security and energy control with voice assistants and a single mobile app.",
  },
  {
    icon: "wifi",
    title: "Secure connectivity & OTA",
    text: "Encrypted device identity, remote provisioning and over-the-air firmware updates at scale.",
  },
  {
    icon: "bolt",
    title: "Automation & rules engine",
    text: "Schedules, scenes and event-driven rules that react to sensors in real time.",
  },
];

export const bmsFeatures = [
  "Live monitoring of HVAC, lighting, power and water",
  "Energy consumption analytics and cost forecasting",
  "Fault detection with instant alerts and escalation",
  "Multi-site portfolio dashboards and custom reports",
  "Open integration with BACnet, Modbus and OPC UA",
  "Historical trends for compliance and ESG reporting",
];

export const pipeline: { icon: IconName; title: string; text: string }[] = [
  { icon: "chip", title: "Collect", text: "Sensors, meters and controllers from any vendor" },
  { icon: "wifi", title: "Ingest", text: "MQTT and HTTP gateways with buffering" },
  { icon: "database", title: "Store", text: "Time-series and data lake storage" },
  { icon: "chart", title: "Analyse", text: "Dashboards, alerts and ML insights" },
];

export const cloud: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "cloud",
    title: "Cloud hosting",
    text: "Managed, auto-scaling environments on AWS, Azure or GCP with cost controls.",
  },
  {
    icon: "database",
    title: "Data platforms",
    text: "Time-series databases, streaming pipelines and warehouses for device data.",
  },
  {
    icon: "shield",
    title: "Security & compliance",
    text: "Zero-trust networking, encryption at rest and in transit, audit logging.",
  },
  {
    icon: "server",
    title: "DevOps & monitoring",
    text: "CI/CD, infrastructure as code, logging, tracing and 24/7 alerting.",
  },
];

export const process = [
  { title: "Discover", text: "We map goals, users and constraints into a clear scope." },
  { title: "Design", text: "Architecture and UX prototypes validated before build." },
  { title: "Build", text: "Agile sprints with weekly demos and automated testing." },
  { title: "Launch & Scale", text: "Release, monitor and keep improving with you." },
];

export const techStack = [
  "Kotlin",
  "Swift",
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "TimescaleDB",
  "MQTT",
  "AWS IoT",
  "Azure IoT Hub",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Grafana",
];
