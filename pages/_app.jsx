import './style.css'

export default function App({ Component, pageProps }) {
    const App = () => {
        return (<>
            <div style={{ textAlign: 'center', backgroundColor: 'darkgreen' }}>Site em desenvolvimento</div>
            <Component {...pageProps} />
        </>)
    }

    return <App />
}