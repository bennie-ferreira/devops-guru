import './style.css'

export default function App({ Component, pageProps }) {
    const App = () => {
        return (<>
            <Component {...pageProps} />
        </>)
    }

    return <App />
}