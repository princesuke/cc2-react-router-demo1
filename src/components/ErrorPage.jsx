import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div>
      <h1>404 - Not Found (ทำเอง)</h1>
      <Link to="/">กลับไปหน้าแรก</Link>
    </div>
  );
}
