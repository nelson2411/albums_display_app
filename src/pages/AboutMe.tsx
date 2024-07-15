import React from "react"
import { Layout } from "../components/Layout"

const AboutMe: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center min-h-screen bg-stone-100">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg mt-5">
          I am a full-stack web developer with a passion for learning new
          technologies and creating web applications. I have experience with
          JavaScript, TypeScript, React, Redux, Next.js, Node.js, Express,
          MongoDB, and SQL. I am currently learning GraphQL and Docker. I am
          excited to continue learning and growing as a developer.
        </p>
      </div>
    </Layout>
  )
}

export default AboutMe
