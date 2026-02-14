import viteLogo from '/vite.svg'

export default function Header() {
    const now = new Date()
    const pageName = 'home'

    return (
        <header>
            <div className='flex flex-row items-center gap-8'>
                <div className='flex flex-row gap-4'>
                    <img src={viteLogo} alt="Logo" className='w-6'/>
                    <h2 className='text-2xl'>{pageName}</h2>
                </div>
                <ul className='flex flex-row gap-5 justify-start'>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </div>
            <span>{now.toLocaleDateString()}</span>
        </header>
    )
}