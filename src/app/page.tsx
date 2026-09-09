import { redirect } from "next/navigation";

export default function Page() {
  redirect("/auth/login");

  // return <div>This won't be rendered</div>;
}
