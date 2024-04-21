import Image from 'next/image';
import { redirect } from 'next/navigation';
import '../styles/globals.css'

export default function Home() {
  redirect('/home');
}
