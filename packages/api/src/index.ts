const Base_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
type Methods = "POST" | "PUT" | "PATCH" | "DELETE" | "GET";

export const f = async (
  method: Methods,
  point: string,
  body?: Record<string, unknown>
) => {
  const methodsWithBody = ["POST", "PUT", "PATCH"];

  try {
    const response = await fetch(`${Base_URL}/${point}`, {
      method,
      body: methodsWithBody.includes(method) ? JSON.stringify(body) : undefined,
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      return response.json();
    } else {
      if (response.status >= 500) {
        throw new Error("Someting went wrong. Please try again later.");
      } else {
        const data = (await response.json()) as { error: string };
        throw new Error(
          data?.error ?? "Someting went wrong. Please try again later."
        );
      }
    }
  } catch (error) {
    throw error;
  }
};
