import { Link } from 'react-router-dom';

// describe the post prop
function Navbar () {
    return (
        <div className='navbar2'>
            <nav>
                <Link to={'/'} className='home'>Home</Link>
                <Link to={'/project'} className='projects'>Projects</Link>
                <Link to={'/create'} className='create'>Create</Link>
            </nav>
        </div>
    )
}


export default Navbar;