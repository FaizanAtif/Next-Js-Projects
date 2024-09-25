"use client"
import Link from "next/link";
import {useRouter} from "next/navigation"


export default function about() {
  const router = useRouter();
    return (
      <div>
        <h1>About Page</h1>

        <Link href="/"> Go to Home Page </Link> <br/> <br/>
      <Link href="/contact"> Go to Contact Page </Link> <br/> <br/>
      <Link href="/footer"> Go to Footer Page </Link> <br/> <br/>
      <Link href="/navbar"> Go to Navbar Page </Link> <br/> <br/>

      <button onClick= {()=> router.push("/")}> Home Page </button> <br/> <br/>
      <button onClick= {()=> router.push("/contact")}>Contact Page </button> <br/> <br/>
      <button onClick= {()=> router.push("/footer")}>Footer Page </button> <br/> <br/>
      <button onClick= {()=> router.push("/navbar")}>Navbar Page </button> <br/> <br/>

      </div>
    );
  }