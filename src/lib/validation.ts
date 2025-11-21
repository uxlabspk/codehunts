export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => boolean;
  message?: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule[];
}

export interface ValidationErrors {
  [key: string]: string;
}

export const validators = {
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  phone: (value: string): boolean => {
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    return phoneRegex.test(value);
  },

  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },
};

export const validateField = (value: string, rules: ValidationRule[]): string => {
  for (const rule of rules) {
    if (rule.required && !value.trim()) {
      return rule.message || "This field is required";
    }

    if (value && rule.email && !validators.email(value)) {
      return rule.message || "Please enter a valid email address";
    }

    if (value && rule.phone && !validators.phone(value)) {
      return rule.message || "Please enter a valid phone number";
    }

    if (value && rule.minLength && !validators.minLength(value, rule.minLength)) {
      return rule.message || `Minimum length is ${rule.minLength} characters`;
    }

    if (value && rule.maxLength && !validators.maxLength(value, rule.maxLength)) {
      return rule.message || `Maximum length is ${rule.maxLength} characters`;
    }

    if (value && rule.pattern && !rule.pattern.test(value)) {
      return rule.message || "Invalid format";
    }

    if (rule.custom && !rule.custom(value)) {
      return rule.message || "Invalid value";
    }
  }

  return "";
};

export const validateForm = (
  formData: Record<string, string>,
  rules: ValidationRules
): ValidationErrors => {
  const errors: ValidationErrors = {};

  Object.keys(rules).forEach((field) => {
    const error = validateField(formData[field] || "", rules[field]);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};

export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
