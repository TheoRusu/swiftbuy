interface AuthResponse {
  token?: string;
  error?: string;
}

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.error || "An error occurred" };
  }

  return data;
};

export const register = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    return { error: data.error || "An error occurred" };
  }

  return data;
};
