import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Glossary from "../pages/Glossary"
import ErrorGuide from "../pages/ErrorGuide"
import SystemCatalog from "../pages/SystemCatalog"
import Performance from "../pages/Performance"
import Cheatsheet from "../pages/Cheatsheet"
import Monitoring from "../pages/Monitoring"
import Extensions from "../pages/Extensions"
import VersionFeatures from "../pages/VersionFeatures"
import Architecture from "../pages/Architecture"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Glossary />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="error-guide" element={<ErrorGuide />} />
        <Route path="system-catalog" element={<SystemCatalog />} />
        <Route path="performance" element={<Performance />} />
        <Route path="cheatsheet" element={<Cheatsheet />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="extensions" element={<Extensions />} />
        <Route path="version-features" element={<VersionFeatures />} />
        <Route path="architecture" element={<Architecture />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
