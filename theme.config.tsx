import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <>
            <span style={{ marginLeft: '.4em' }}> 💚 Devops Guru </span>
        </>
    ),
    project: {
        link: 'https://github.com/bennie-ferreira/devops-guru'
    },
    editLink: {
        content: null,
    },
    feedback: {
        content: "Dúvidas? Deixe seu feedback 🖖"
    },
    sidebar: {
        toggleButton: true,
    },
    toc: {
        title: 'Tópicos 🛸',
        // extraContent: <Supporters />,
    },
    head: function UseHead() {
        const { title } = useConfig()
        return (
            <>
                <title>{title == 'Index' ? '💚 Devops Guru' : (title + ' | Devops Guru')} </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Devops Guru" />
                <meta property="og:description" content="Devops Guru" />
                <meta name="og:title" content={title ? title + ' | Devops Guru' : 'Devops Guru'} />
            </>
        )},
    footer: {
        content: 'Copyright © 2024 Devops Guru',
    },
    banner: {
        content: '💚 Blog em desenvolvimento, volte mais tarde! 🤓',
        dismissible: false,
    },
    docsRepositoryBase: 'https://github.com/bennie-ferreira/devops-guru',
    search: {
        placeholder: 'Search...',
    },
}

export default config