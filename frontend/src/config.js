const getApiUrl = () => {
    let url = import.meta.env.VITE_API_URL;

    // Fallback if env var is missing
    if (!url) {
        return 'https://blee100003.pythonanywhere.com/api';
    }

    // Normalization: Remove trailing slash if present
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    // Robustness: Ensure it ends with /api
    if (!url.endsWith('/api')) {
        url += '/api';
    }

    return url;
};

const API_BASE_URL = getApiUrl();

export default API_BASE_URL;
