export class StringUtils{
     /**
     * Capitalize first letter of string
     * @param str - Input string
     * @returns Capitalized string
     * @example capitalize('hello') => 'Hello'
     */
    static capitalize(str: string): string {
        if (!str) return ''; 
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

     /**
     * Convert string to title case
     * @param str - Input string
     * @returns Title cased string
     * @example toTitleCase('hello world') => 'Hello World'
     */
     static toTitleCase(str: string): string {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => this.capitalize(word))
            .join(' ');
    }

    /**
     * Remove all whitespace from string
     * @param str - Input string
     * @returns String without spaces
     * @example removeSpaces('hello world') => 'helloworld'
     */
    static removeSpaces(str: string): string {
        return str.replace(/\s+/g, '');
    }

    /**
     * Check if string contains only numbers
     * @param str - Input string
     * @returns True if numeric
     */
    static isNumeric(str: string): boolean {
        return /^\d+$/.test(str);
    }

    /**
     * Extract numbers from string
     * @param str - Input string
     * @returns Array of numbers found
     * @example extractNumbers('Price: $99.99') => ['99', '99']
     */
    static extractNumbers(str: string): string[] {
        return str.match(/\d+/g) || [];
    }

    /**
     * Truncate string to specified length
     * @param str - Input string
     * @param length - Max length
     * @param suffix - String to append (default: '...')
     * @returns Truncated string
     */
    static truncate(str: string, length: number, suffix: string = '...'): string {
        if (str.length <= length) return str;
        return str.substring(0, length) + suffix;
    }

    /**
     * Generate random string
     * @param length - Length of string
     * @returns Random alphanumeric string
     */
    static generateRandomString(length: number = 10): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Mask sensitive information
     * @param str - Input string
     * @param visibleChars - Number of visible characters at start and end
     * @returns Masked string
     * @example maskString('1234567890', 2) => '12******90'
     */
    static maskString(str: string, visibleChars: number = 4): string {
        if (str.length <= visibleChars * 2) return str;
        const start = str.substring(0, visibleChars);
        const end = str.substring(str.length - visibleChars);
        const masked = '*'.repeat(str.length - (visibleChars * 2));
        return `${start}${masked}${end}`;
    }
}
