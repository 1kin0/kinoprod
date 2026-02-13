import viteLogo from '/vite.svg'

export default function Header() {
    const now = new Date()

    return (
        <header>
            <div className='display: flex; flex-direction: row;'>
                <img src={viteLogo} alt="Logo" />
                <h2>kinoprod</h2>
            </div>
            <span>{now.toLocaleDateString()}</span>
        </header>
    )
}