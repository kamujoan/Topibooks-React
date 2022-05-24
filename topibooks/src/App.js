import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import African from './pages/african';
import AfricanSlug from './pages/african/slug';
import All from './pages/all-books';
import AllSlug from './pages/all/slug';
import Books from './pages/book';
import BookSlug from './pages/books/slug';
import Classics from './pages/classics';
import ClassicsSlug from './pages/classics/slug';
import Dystopian from './pages/dystopian';
import DystopianSlug from './pages/dystopian/slug';
import Kids from './pages/kids';
import KidsSlug from './pages/kids/slug';
import Motivational from './pages/motivational';
import MotivationalSlug from './pages/motivational/slug';
import Romance from './pages/romance';
import RomanceSlug from './pages/romance/slug';
import Shelf from './pages/shelf';
import ShelfSlug from './pages/shelf/slug';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-books" element={<All />} />
      <Route path="/classics" element={<Classics />} />
      <Route path="/dystopian" element={<Dystopian />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/motivational" element={<Motivational />} />
      <Route path="/romance" element={<Romance />} />
      <Route path="/shelf" element={<Shelf />} />
      <Route path="/books" element={<Books />} />
      <Route path="/african" element={<African />} />
      <Route path="/african/:slug" element={<AfricanSlug />} />
      <Route path="/books/:slug" element={<BookSlug />} />
      <Route path="/all/:slug" element={<AllSlug />} />
      <Route path="/classics/:slug" element={<ClassicsSlug />} />
      <Route path="/dystopian/:slug" element={<DystopianSlug />} />
      <Route path="/kids/:slug" element={<KidsSlug />} />
      <Route path="/motivational/:slug" element={<MotivationalSlug />} />
      <Route path="/romance/:slug" element={<RomanceSlug />} />
      <Route path="/shelf/:slug" element={<ShelfSlug />} />
    </Routes>
  );
}
