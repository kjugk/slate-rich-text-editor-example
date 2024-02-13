import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事作成",
};

export default function ArticleFormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-10 max-w-[1024px] m-auto">{children}</div>;
}
