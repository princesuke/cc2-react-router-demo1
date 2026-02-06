import { useSearchParams } from "react-router"

export default function About() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");



    return <div className="bg-yellow-300 h-[300px] flex items-center justify-center">
        <div className="text-5xl animate-bounce">About</div>
        <div>{name}</div>
    </div>
}