import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from "next/link";

export default function Home(/*{ posts }*/) {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-4xl font-bold mb-3">Welcome to my site</h1>
        <p className="text-gray-600">
          A place where I can put all of my goofy stuff.
        </p>
      </div>
    </>
  );
}

