import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For demo purposes, simulate API responses
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  
  if (method === "POST" && url === "/api/contact") {
    // Simulate successful contact form submission
    return {
      ok: true,
      status: 200,
      json: async () => ({
        success: true,
        message: "Contact submission received successfully",
        id: Math.floor(Math.random() * 1000)
      })
    } as Response;
  }
  
  // Default response for other endpoints
  return {
    ok: true,
    status: 200,
    json: async () => ({ message: "This is a frontend-only demo" })
  } as Response;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
