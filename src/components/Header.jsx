import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg' 
        : 'bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md'
    }`}>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>Prestige </span>
            <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Horizons</span>
          </h1>
        </Link>
        
        <form
          onSubmit={handleSubmit}
          className='bg-white/10   w-[60%] max-sm:w-[40%]  backdrop-blur-md p-3 rounded-full justify-between px-3 flex items-center border border-white/20 shadow-md transition-all hover:bg-white/20'
        >
          <input
            type='text'
            placeholder='Search...'
            className='flex-1 bg-transparent focus:outline-none w-[100%] sm:w-64 text-white placeholder:text-white/70'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='ml-2 bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-full shadow-md hover:opacity-90 transition-all'>
            <FaSearch className='text-white' />
          </button>
        </form>
        
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <div className='relative p-0.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <img
                  className='rounded-full h-7 w-7 object-cover'
                  src={currentUser.avatar}
                  alt='profile'
                />
              </div>
            ) : (
              <li className='text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all'>
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}