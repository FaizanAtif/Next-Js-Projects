"use client"
import Link from "next/link";
import {useRouter} from "next/navigation"

export default function contact() {
  const router = useRouter();
    return (
      <div>
        <h1>Contact Page</h1>

        <Link href="/"> Go to Home Page </Link> <br/> <br/>
      <Link href="/about"> Go to About Page </Link> <br/> <br/>
      <Link href="/footer"> Go to Footer Page </Link> <br/> <br/>
      <Link href="/navbar"> Go to Navbar Page </Link> <br/> <br/>

      <button onClick= {()=> router.push("/about")}> About Page </button> <br/> <br/>
      <button onClick= {()=> router.push("/")}> Contact Page </button> <br/> <br/>
      <button onClick= {()=> router.push("/footer")}>Footer Page </button> <br/> <br/>
      <button onClick= {()=> router.push("/navbar")}>Navbar Page </button> <br/> <br/>

      </div>
    );
  }
