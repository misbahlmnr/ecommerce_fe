import DasboardTemplate from "@/components/DashboardTemplate";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DasboardTemplate>{children}</DasboardTemplate>;
}
