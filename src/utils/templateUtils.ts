/**
 * Replaces placeholders in a template string with values from a data object
 * @param template The template string containing placeholders like {{key}}
 * @param data An object containing key-value pairs to replace in the template
 * @returns The template with all placeholders replaced with their corresponding values
 */
export function replacePlaceholders(
  template: string,
  data: Record<string, string | string[]>
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = data[key];
    
    // Handle array values by joining with commas
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    
    // Return the value or an empty string if the key doesn't exist
    return value !== undefined ? String(value) : '';
  });
} 