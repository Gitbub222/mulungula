import Image from "next/image";
import Book from "../components/book";
export default function Home() {
  return (
      <main className="p-24">
        <div className="flex flex-row flex-start">
          <Book />
          <Book />
        </div>
      </main>
  );
}
