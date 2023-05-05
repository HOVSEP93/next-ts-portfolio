import { motion } from "framer-motion";
import {
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiReact,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiJavascript,
    SiOracle,
    SiMysql,
    SiGraphql,
    SiMaterialui,
    SiExpress,
    SiMongodb,
    SiBootstrap,
    SiFigma,
    SiGit,
    SiGithub,
    SiJquery,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Hovsep 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I'm a self-taught Web Developer from the Iraq. My Creative skills and experience field of Interest's are
                building new Web Technologies and Products and also in areas related to Deep Learning and Graphic Design
                make a logo Whenever possible, I also apply my passion for developing products with Modern Javascript
                Library and Frameworks like React.js
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I'm passionate about everything technology; from designing and developing software, to understanding how
                the many moving parts of the internet work together, to programming, and so much more. I strive to learn
                more about these things every day, and utilize my knowledge to further understand <i>how</i> or{" "}
                <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiReact} name="React js" />
                <TechItem icon={SiJquery} name="jQuery" />
                <TechItem icon={SiTailwindCSS} name="Tailwind CSS" />
                <TechItem icon={SiMaterialui} name="Material UI" />
                <TechItem icon={SiBootstrap} name="Bootstrap" />
                <TechItem icon={SiFigma} name="Figma" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiGithub} name="GitHub" />
                <TechItem icon={SiNextJs} name="Next.js" />
                <TechItem icon={SiGraphql} name="Graphql" />
                <TechItem icon={SiNodeJs} name="Node.js" />
                <TechItem icon={SiExpress} name="Express" />
                <TechItem icon={SiMongodb} name="Mongodb" />
                <TechItem icon={SiMysql} name="Mysql" />
                <TechItem icon={SiOracle} name="Oracle" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/HOVSEP93"
                    rel="noreferrer"
                    target="_blank"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
                earnt me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
                GitHub, and <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below
                are some of my most popular repositories.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/HOVSEP93`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/HOVSEP93/repos?type=owner&per_page=10`).then(res =>
        res.json()
    );

    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
