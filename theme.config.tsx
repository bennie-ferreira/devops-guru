import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <>
            <span style={{ marginLeft: '.4em' }}> Devops Guru </span>
        </>
    ),
    project: {
        link: 'https://github.com/bennie-ferreira/devops-guru'
    },
    head: function UseHead() {
        const { title } = useConfig()
        return (
            <>
                <title>{title ? title + ' | Devops Guru': 'Devops Guru'} </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Devops Guru" />
                <meta property="og:description" content="Devops Guru" />
                <meta name="og:title" content={title ? title + ' | Devops Guru' : 'Devops Guru'} />
            </>
        )},
    footer: {
        content: 'Copyright © 2024 Devops Guru',
    },
    search: {
        placeholder: 'Search...',
    },
}

export default config