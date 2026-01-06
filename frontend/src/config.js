const getApiUrl = () => {
    // If env var is set (e.g. for Netlify), use it
    if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;

    // Fallback directly to the production backend if env var is missing
    // This fixes the issue on Vercel if the variable isn't passing through
    return 'https://blee100003.pythonanywhere.com/api';
};

const API_BASE_URL = getApiUrl();

export default API_BASE_URL;
