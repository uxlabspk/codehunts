import { config } from "@/config/env";

export interface FormData {
  [key: string]: string | number | boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Submit form data to the API
 */
export async function submitFormData<T = unknown>(
  endpoint: string,
  data: FormData
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${config.api.baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * Send contact form email (fallback for no backend)
 */
export function sendContactEmail(data: FormData): void {
  const subject = encodeURIComponent("Contact Form Submission");
  const body = encodeURIComponent(
    Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")
  );

  window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
}
