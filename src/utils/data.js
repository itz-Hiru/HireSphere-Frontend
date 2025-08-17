import {
  Users,
  Building2,
  TrendingUp,
  Search,
  FileText,
  MessageSquare,
  Award,
  BarChart3,
  Shield,
  Clock,
  LayoutDashboard,
  Plus,
  Briefcase,
  Target,
} from "lucide-react";

export const stats = [
  { icon: Users, label: "Active Users", value: "2.4M+" },
  { icon: Building2, label: "Companies", value: "50K+" },
  { icon: TrendingUp, label: "Jobs Posted", value: "150K+" },
];

export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description:
      "AI-Powered algorithm matches you with relevant opportunities based on your skills and performances.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create professional resumes with our intuitve builder and templates designed by experts",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "Connect directly with hiring managers and recruiters through our secure messaging platform",
  },
  {
    icon: Award,
    title: "Skill Assesment",
    description:
      "Showcase your abilities with verified skill tests and earn badges that employer trust.",
  },
];

export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description:
      "Access our vast database of pre-scanned candidates and find the perfect fit for your team.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your hiring performance with detailed analytics and insights on candidate management.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description:
      "All candidates undergo background verification to ensure you're hiring trustworthy professionals.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description:
      "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools",
  },
];

export const analytics_stats = [
  {
    icon: Users,
    title: "Active Users",
    value: "2.4M+",
    growth: "+15%",
    color: "blue",
  },
  {
    icon: Briefcase,
    title: "Jobs Posted",
    value: "150K+",
    growth: "+22%",
    color: "purple",
  },
  {
    icon: Target,
    title: "Successful Hires",
    value: "89K+",
    growth: "+18%",
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Match Rate",
    value: "94%",
    growth: "+8%",
    color: "orange",
  },
];

export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-Service", label: "Customer-Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finances", label: "Finances" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];

export const SALERY_RANGES = [
  "Less than Rs. 30 000",
  "Rs. 30 000 - Rs. 50 000",
  "Rs. 50 000 - Rs. 100 000",
  "More than Rs. 100 000",
];
