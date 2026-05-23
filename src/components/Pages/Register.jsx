import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';
import { useLanguage } from '../../context/useLanguage';
const Register = () => {
    const { theme } = useThemeStore();
    const navigate = useNavigate();
    const { language } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        let localErrors = {};

        if (!formData.name.trim()) {
            localErrors.name = 'Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            localErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            localErrors.email = 'Invalid email format';
        }

        if (!formData.username.trim()) {
            localErrors.username = 'Username is required';
        } else if (/\s/.test(formData.username)) {
            localErrors.username = 'Username must not contain spaces';
        }

        const passwordRegex = /^(?=.*[a-z])(?=(.*[A-Z]))(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (!formData.password) {
            localErrors.password = 'Password is required';
        } else if (!passwordRegex.test(formData.password)) {
            localErrors.password = 'Must be ≥ 8 chars, 1 uppercase, 1 lowercase, 1 digit, and 1 special char (@$!%*?&#)';
        }

        if (!formData.confirmPassword) {
            localErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.password !== formData.confirmPassword) {
            localErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(localErrors);
        return Object.keys(localErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            alert(JSON.stringify(formData, null, 2));
            navigate('/');
        }
    };

    return (
        <div className={`max-w-md mx-auto mt-6 p-6 border rounded-2xl shadow-sm transition-colors ${
            theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-800'
        }`}>
            <h2 className="text-2xl font-bold text-center mb-6">{language === 'ar' ? 'نموذج التسجيل' : 'Register Form'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{language === 'ar' ? 'الاسم' : 'Name'}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-2.5 border rounded-xl outline-none text-sm transition-all ${
                            theme === 'dark' ? 'bg-gray-950 border-gray-800 text-white focus:border-indigo-500' : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-600'
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-2.5 border rounded-xl outline-none text-sm transition-all ${
                            theme === 'dark' ? 'bg-gray-950 border-gray-800 text-white focus:border-indigo-500' : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-600'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{language === 'ar' ? 'اسم المستخدم' : 'User Name'}</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={`w-full p-2.5 border rounded-xl outline-none text-sm transition-all ${
                            theme === 'dark' ? 'bg-gray-950 border-gray-800 text-white focus:border-indigo-500' : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-600'
                        }`}
                    />
                    {errors.username && <p className="text-red-500 text-xs mt-1 font-medium">{errors.username}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full p-2.5 border rounded-xl outline-none text-sm transition-all ${
                            theme === 'dark' ? 'bg-gray-950 border-gray-800 text-white focus:border-indigo-500' : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-600'
                        }`}
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full p-2.5 border rounded-xl outline-none text-sm transition-all ${
                            theme === 'dark' ? 'bg-gray-950 border-gray-800 text-white focus:border-indigo-500' : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-600'
                        }`}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 font-medium">{errors.confirmPassword}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full text-center bg-green-600 hover:bg-green-500 text-white text-sm font-medium py-3 px-4 rounded-xl transition-colors cursor-pointer shadow-xs mt-2"
                >
                    {language === 'ar' ? 'تسجيل' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;