import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <Button asChild>
        <Link href="/article/new">新規作成</Link>
      </Button>
    </main>
  );
}
