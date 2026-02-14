import viteLogo from '/vite.svg'

export default function Header() {
    const now = new Date()
    const pageName = 'home'

    return (
        <header>
            <div className='flex flex-row items-center gap-10'>
                <div className='flex flex-row gap-4'>
                    <img src={viteLogo} alt="Logo" className='w-6'/>
                </div>
                <ul className='flex flex-row gap-5 justify-start'>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <span>{now.toLocaleDateString()}</span>
        </header>
    )
}