import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
const USERS_KEY = "eventara_users_v2";
const SESSION_KEY = "eventara_session_v2";
const ADMIN_SESSION_KEY = "eventara_admin_session_v2";

const read = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const seedUsers = [
  {
    id: "customer-demo",
    name: "Demo Customer",
    email: "customer@eventara.com",
    phone: "9876543210",
    password: "customer123",
    createdAt: "2026-09-01T09:00:00.000Z",
  },
];

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const stored = read(USERS_KEY, null);
    if (stored) return stored;
    localStorage.setItem(USERS_KEY, JSON.stringify(seedUsers));
    return seedUsers;
  });
  const [user, setUser] = useState(() => read(SESSION_KEY, null));
  const [admin, setAdmin] = useState(() => read(ADMIN_SESSION_KEY, null));

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
  }, [user]);

  useEffect(() => {
    if (admin) localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(admin));
    else localStorage.removeItem(ADMIN_SESSION_KEY);
  }, [admin]);

  const register = ({ name, email, phone, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    if (users.some((item) => item.email === normalizedEmail)) {
      return { success: false, message: "An account already exists with this email." };
    }
    const newUser = {
      id: `customer-${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password,
      createdAt: new Date().toISOString(),
    };
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    return { success: true, user: newUser };
  };

  const login = (email, password) => {
    const found = users.find(
      (item) => item.email === email.trim().toLowerCase() && item.password === password
    );
    if (!found) return { success: false, message: "Invalid email or password." };
    setUser(found);
    return { success: true, user: found };
  };

  const logout = () => setUser(null);

  const adminLogin = (email, password) => {
    if (email.trim().toLowerCase() !== "admin@eventara.com" || password !== "admin123") {
      return { success: false, message: "Invalid admin credentials." };
    }
    const account = { id: "admin-1", name: "Eventara Admin", email: "admin@eventara.com", role: "admin" };
    setAdmin(account);
    return { success: true, admin: account };
  };

  const adminLogout = () => setAdmin(null);

  const value = useMemo(
    () => ({
      users,
      user,
      admin,
      isAuthenticated: Boolean(user),
      isAdminAuthenticated: Boolean(admin),
      register,
      login,
      logout,
      adminLogin,
      adminLogout,
    }),
    [users, user, admin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
