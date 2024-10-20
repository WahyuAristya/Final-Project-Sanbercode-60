import "./App.css";
import "@fontsource/sora";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Lowongan from "./components/lowongan/lowongan";
import JobDetail from "./components/jobDetail/jobDetail";
import Dashboard from "./components/dashboard/dashboard";
import EditDataTable from "./components/dashboard/editDataTable";
import Sidebar from "./components/sidebar/sidebar";
import ScrollToTop from "./components/scrollTop"; // Impor ScrollToTop
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ListDataTable from "./components/dashboard/listDataTable";
import AddDataForm from "./components/dashboard/addDataForm";
import LoginPage from "./components/auth/loginPage";
import RegisterPage from "./components/auth/registerPage";
import NotFound from "./components/notFound";
import PrivateRoute from "./components/auth/privateRoute"; // Impor PrivateRoute
import EditProfile from "./components/dashboard/editProfile";

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "*"; // Cek apakah ini halaman login atau register

  return (
    <>
      {!isAuthPage && <Navbar isDashboard={isDashboard} />}
      
      {/* Sidebar dan konten utama menggunakan flex layout */}
      <div className={isDashboard ? "flex" : ""}>
        {isDashboard && (
          <div className="w-[250px]"> {/* Atur lebar sidebar */}
            <Sidebar />
          </div>
        )}
        
        <div className="flex-1"> {/* Konten utama akan memenuhi sisa ruang */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lowongan" element={<Lowongan />} />
            <Route path="/lowongan/:jobId" element={<JobDetail />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            
            {/* Semua route di dalam dashboard yang dilindungi */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/dashboard/list-data-table" element={
              <PrivateRoute>
                <ListDataTable />
              </PrivateRoute>
            } />
            <Route path="/dashboard/list-data-table/edit/:id" element={
              <PrivateRoute>
                <EditDataTable />
              </PrivateRoute>
            } />
            <Route path="/dashboard/list-data-table/create" element={
              <PrivateRoute>
                <AddDataForm />
              </PrivateRoute>
            } />
            <Route path="/dashboard/edit-profile" element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            } />
              
            {/* Route 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Tambahkan ScrollToTop di dalam BrowserRouter */}
      <Layout />
    </BrowserRouter>
  );
}

export default App;
