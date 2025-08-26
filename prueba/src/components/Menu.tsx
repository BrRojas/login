import { supabase } from "../supabaseClient";

interface MenuProps {
    user: any;
    setUser: (user: any) => void;
    children?: React.ReactNode;
}

export default function Menu({user,children, setUser}: MenuProps) {
    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h2 className="text-2xl mb-4">Bienvenido, {user.email}</h2>
                {children}
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white p-4 rounded hover:bg-red-600"
                >
                    Logout
                </button>
        </div>
    )
}