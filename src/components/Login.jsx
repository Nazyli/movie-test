import React from 'react';
import logo from '../assets/Logo.png';
import bg from '../assets/login.jpg';
import googleLogo from '../assets/google.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/beranda');
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="bg-black bg-opacity-80 p-10 w-full max-w-md text-center rounded-xl shadow-lg">
                <img src={logo} alt="Logo" className="w-36 h-10 mx-auto mb-5" />
                <h2 className="text-2xl font-semibold text-white mb-1">Masuk</h2>
                <p className="text-gray-300 mb-6">Selamat datang kembali!</p>

                <form onSubmit={handleLogin} className="space-y-4 text-left">
                    <div>
                        <label htmlFor="username" className="block text-gray-300 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Masukkan username"
                            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300 mb-1">
                            Kata Sandi
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Masukkan kata sandi"
                            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Masuk
                    </button>
                </form>

                <div className="mt-4 flex flex-col items-center gap-2 text-sm text-gray-300">
                    <span>
                        Belum punya akun?{' '}
                        <Link to="/register" className="text-blue-400 hover:underline">
                            Daftar
                        </Link>
                    </span>
                    <a href="#" className="text-blue-400 hover:underline">
                        Lupa kata sandi?
                    </a>
                </div>

                <div className="my-4 text-gray-400">atau</div>

                <button className="w-full flex items-center justify-center gap-3 bg-white text-black py-2 rounded-md shadow hover:bg-gray-100 transition">
                    <img src={googleLogo} alt="Google Logo" className="w-4 h-4" />
                    <span className="text-sm font-medium">Masuk dengan Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
