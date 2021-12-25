import { useState } from 'react'
import { Tooltip } from '../components/Tooltip'
import {
  AngularIcon,
  CSSIcon,
  CypressIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  GitlabIcon,
  GraphQLIcon,
  HTMLIcon,
  InstagramIcon,
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

const icons = {
  angular: AngularIcon,
  css: CSSIcon,
  cypress: CypressIcon,
  docker: DockerIcon,
  express: ExpressIcon,
  git: GitIcon,
  gitlab: GitlabIcon,
  graphql: GraphQLIcon,
  html: HTMLIcon,
  instagram: InstagramIcon,
  javascript: JavascriptIcon,
  jest: JestIcon,
  linux: LinuxIcon,
  mongodb: MongoDBIcon,
  nextjs: NextJSIcon,
  nodejs: NodeJSIcon,
  npm: NpmIcon,
  postgres: PostgreSQLIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  sass: SassIcon,
  storybook: StorybookIcon,
  styled: StyledComponentsIcon,
  tailwind: TailwindIcon,
  typescript: TypescriptIcon,
  vue: VueIcon,
  webpack: WebpackIcon,
}

export const SkillsSection = (): JSX.Element => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      Icon: icons.angular,
      label: 'Angular',
      link: 'https://angular.io/',
      hoverColor: '#DD0031',
      hovered: false,
    },
    {
      id: 2,
      Icon: icons.react,
      label: 'React.js',
      link: 'https://reactjs.org/',
      hoverColor: '#61DAFB',
      hovered: false,
    },
    {
      id: 3,
      Icon: icons.vue,
      label: 'Vue.js',
      link: 'https://vuejs.org/',
      hoverColor: '#41b883',
      hovered: false,
    },
    {
      id: 4,
      Icon: icons.javascript,
      label: 'Javascript',
      link: 'https://www.javascript.com/',
      hoverColor: '#E6D33D',
      hovered: false,
    },
    {
      id: 5,
      Icon: icons.tailwind,
      label: 'Tailwind CSS',
      link: 'https://tailwindcss.com/',
      hoverColor: '#38BDF8',
      hovered: false,
    },
    {
      id: 6,
      Icon: icons.graphql,
      label: 'GraphQL',
      link: 'https://graphql.org/',
      hoverColor: '#E10098',
      hovered: false,
    },
    {
      id: 7,
      Icon: icons.jest,
      label: 'Jest',
      link: 'https://jestjs.io/',
      hoverColor: '#C21325',
      hovered: false,
    },
    {
      id: 8,
      Icon: icons.docker,
      label: 'Docker',
      link: 'https://www.docker.com/',
      hoverColor: '#2496ED',
      hovered: false,
    },
    {
      id: 9,
      Icon: icons.redux,
      label: 'Redux',
      link: 'https://redux.js.org/',
      hoverColor: '#764ABC',
      hovered: false,
    },
    {
      id: 10,
      Icon: icons.storybook,
      label: 'Storybook',
      link: 'https://storybook.js.org/',
      hoverColor: '#FF4785',
      hovered: false,
    },
  ])
  function hoverSkill(id: number) {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, hovered: true } : skill
      )
    )
  }
  function leaveSkill(id: number) {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, hovered: false } : skill
      )
    )
  }
  return (
    <section className="h-screen">
      <h1 className="lowercase font-bold text-3xl">Minhas Techs</h1>
      <ul className="flex mt-28 flex-wrap justify-between">
        {skills.map(({ id, Icon, label, link, hovered, hoverColor }) => (
          <li key={label} className="relative">
            <div
              className={
                'flex w-full absolute -top-12 justify-center items-center text-center ' +
                (hovered ? 'block' : 'hidden')
              }
            >
              <Tooltip label={label} />
            </div>
            <a
              href={link}
              onMouseOver={() => hoverSkill(id)}
              onMouseLeave={() => leaveSkill(id)}
            >
              <Icon
                width="80px"
                height="80px"
                color={hovered ? hoverColor : 'white'}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
