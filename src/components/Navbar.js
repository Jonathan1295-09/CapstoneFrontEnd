import { Link } from 'react-router-dom';

// describe the post prop
function Navbar () {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/project'}>Projects</Link>
            <Link to={'/create'}>Create</Link>
        </nav>
        
    )
}


export default Navbar;