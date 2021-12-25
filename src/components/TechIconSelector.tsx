import {
  AngularIcon,
  CSSIcon,
  CypressIcon,
  DockerIcon,
  ExpressIcon,
  GithubIcon,
  GitIcon,
  GitlabIcon,
  GraphQLIcon,
  HTMLIcon,
  JavascriptIcon,
  JestIcon,
  LinuxIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  NpmIcon,
  PostgreSQLIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypescriptIcon,
  VueIcon,
  WebpackIcon,
} from '../icons'
import { ISVGProps } from '../interfaces/svg-props.interface'

export type AvailableTechs =
  | 'angular'
  | 'css'
  | 'cypress'
  | 'docker'
  | 'express'
  | 'git'
  | 'github'
  | 'gitlab'
  | 'graphql'
  | 'html'
  | 'javascript'
  | 'jest'
  | 'linux'
  | 'mongodb'
  | 'nextjs'
  | 'nodejs'
  | 'npm'
  | 'postgres'
  | 'react'
  | 'redux'
  | 'sass'
  | 'storybook'
  | 'styled'
  | 'tailwind'
  | 'typescript'
  | 'vue'
  | 'webpack'
type TechIconSelectorProps = { tech: AvailableTechs } & ISVGProps

const techs: Record<AvailableTechs, { Icon: (_: ISVGProps) => JSX.Element }> = {
  angular: {
    Icon: AngularIcon,
  },
  css: {
    Icon: CSSIcon,
  },
  cypress: {
    Icon: CypressIcon,
  },
  docker: {
    Icon: DockerIcon,
  },
  express: {
    Icon: ExpressIcon,
  },
  git: {
    Icon: GitIcon,
  },
  github: {
    Icon: GithubIcon,
  },
  gitlab: {
    Icon: GitlabIcon,
  },
  graphql: {
    Icon: GraphQLIcon,
  },
  html: {
    Icon: HTMLIcon,
  },
  javascript: {
    Icon: JavascriptIcon,
  },
  jest: {
    Icon: JestIcon,
  },
  linux: {
    Icon: LinuxIcon,
  },
  mongodb: {
    Icon: MongoDBIcon,
  },
  nextjs: {
    Icon: NextJSIcon,
  },
  nodejs: {
    Icon: NodeJSIcon,
  },
  npm: {
    Icon: NpmIcon,
  },
  postgres: {
    Icon: PostgreSQLIcon,
  },
  react: {
    Icon: ReactIcon,
  },
  redux: {
    Icon: ReduxIcon,
  },
  sass: {
    Icon: SassIcon,
  },
  storybook: {
    Icon: StorybookIcon,
  },
  styled: {
    Icon: StyledComponentsIcon,
  },
  tailwind: {
    Icon: TailwindIcon,
  },
  typescript: {
    Icon: TypescriptIcon,
  },
  vue: {
    Icon: VueIcon,
  },
  webpack: {
    Icon: WebpackIcon,
  },
}

export const TechIconSelector = ({
  tech,
  ...props
}: TechIconSelectorProps): JSX.Element => {
  const { Icon } = techs[tech]

  return <Icon {...props} />
}
