import { ReactElement, useMemo } from 'react'

import aws from '../../assets/tech-stacks/AWS.svg'
import django from '../../assets/tech-stacks/Django.svg'
import docker from '../../assets/tech-stacks/Docker.svg'
import elasticSearch from '../../assets/tech-stacks/Elastic Search.svg'
import flask from '../../assets/tech-stacks/Flask.svg'
import git from '../../assets/tech-stacks/Git.svg'
import gcp from '../../assets/tech-stacks/Google Cloud.svg'
import intellij from '../../assets/tech-stacks/IntelliJ IDEA.svg'
import javascript from '../../assets/tech-stacks/JavaScript.svg'
import kotlin from '../../assets/tech-stacks/Kotlin.svg'
import nodejs from '../../assets/tech-stacks/Node.js.svg'
import postgres from '../../assets/tech-stacks/PostgresSQL.svg'
import pycharm from '../../assets/tech-stacks/PyCharm.svg'
import python from '../../assets/tech-stacks/Python.svg'
import react from '../../assets/tech-stacks/React.svg'
import spring from '../../assets/tech-stacks/Spring.svg'
import tailwind from '../../assets/tech-stacks/Tailwind CSS.svg'
import typescript from '../../assets/tech-stacks/TypeScript.svg'
import Section from './Section.js'

const TechStacks = (): ReactElement => {
  const techStacks: { [key: string]: string } = useMemo(
    () => ({
      Kotlin: kotlin,
      'Spring Boot': spring,
      Javascript: javascript,
      Typescript: typescript,
      Nodejs: nodejs,
      Python: python,
      Flask: flask,
      Django: django,
      PostgreSQL: postgres,
      Docker: docker,
      AWS: aws,
      GCP: gcp,
      'Elastic Search': elasticSearch,
      React: react,
      Tailwind: tailwind,
      Git: git,
      Intellij: intellij,
      Pycharm: pycharm,
    }),
    [],
  )

  return (
    <Section title='Tech Stacks' subtitle="I've mostly worked with" border>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {Object.keys(techStacks).map((key) => (
          <div key={key} className='flex flex-col gap-2 items-center justify-center'>
            <img key={key} src={techStacks[key]} className='w-20 h-20' alt={key} />
            <p className='font-semibold text-lg'>{key}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TechStacks
