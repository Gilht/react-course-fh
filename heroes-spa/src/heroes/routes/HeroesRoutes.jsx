import { Navigate, Routes, Route } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { DcPage } from "../pages/DcPage"
import { Hero } from "../pages/Hero"
import { Marvelpage } from "../pages/Marvelpage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='marvel' element={<Marvelpage />} />
            <Route path='dc' element={<DcPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='hero' element={<Hero />} />

            <Route path='/' element={<Navigate to='/marvel' />} />

        </Routes>
    </>
  )
}
