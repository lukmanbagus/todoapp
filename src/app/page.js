import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-5">Todo List App</h1>
      <p className="mb-4">Selamat datang, di aplikasi Todo List</p>
      <Link href="/dashboard" className="bg-blue-500 text-white rounded px-3 py-1.5 hover:bg-blue-600">Dashboard</Link>
    </main>
  );
}
