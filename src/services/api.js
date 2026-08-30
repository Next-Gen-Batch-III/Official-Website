const configuredApiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
// The backend mounts all public routes under /api. Accept either server URL form
// so the environment variable cannot accidentally omit that route prefix.
const apiUrl = configuredApiUrl
  ? configuredApiUrl.endsWith("/api")
    ? configuredApiUrl
    : `${configuredApiUrl}/api`
  : "";

export async function apiRequest(path, options = {}) {
  if (!apiUrl) {
    throw new Error("VITE_API_URL is not configured.");
  }

  const response = await fetch(`${apiUrl}${path}`, options);

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(
      body?.message || body?.error?.message || "Request failed. Please try again.",
    );
  }

  if (response.status === 204) return null;
  return response.json();
}
