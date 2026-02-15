/**
 * Random data generation utilities
 */

export class RandomUtils {
    
    /**
     * Generate random number between min and max
     * @param min - Minimum value
     * @param max - Maximum value
     * @returns Random number
     */
    static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate random email
     * @param domain - Email domain (default: 'test.com')
     * @returns Random email address
     */
    static randomEmail(domain: string = 'test.com'): string {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);
        return `user_${timestamp}_${random}@${domain}`;
    }

    /**
     * Generate random phone number
     * @param format - Phone format (default: US)
     * @returns Random phone number
     */
    static randomPhone(format: string = 'US'): string {
        if (format === 'US') {
            const area = this.randomNumber(200, 999);
            const prefix = this.randomNumber(200, 999);
            const line = this.randomNumber(1000, 9999);
            return `(${area}) ${prefix}-${line}`;
        }
        // Add more formats as needed
        return `${this.randomNumber(1000000000, 9999999999)}`;
    }

    /**
     * Generate random name
     * @returns Random first and last name
     */
    static randomName(): { firstName: string; lastName: string; fullName: string } {
        const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma', 'Chris', 'Lisa'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];
        
        const firstName = firstNames[this.randomNumber(0, firstNames.length - 1)];
        const lastName = lastNames[this.randomNumber(0, lastNames.length - 1)];
        
        return {
            firstName,
            lastName,
            fullName: `${firstName} ${lastName}`
        };
    }

    /**
     * Generate random boolean
     * @returns Random true or false
     */
    static randomBoolean(): boolean {
        return Math.random() < 0.5;
    }

    /**
     * Pick random item from array
     * @param array - Array to pick from
     * @returns Random item
     */
    static randomFromArray<T>(array: T[]): T {
        return array[this.randomNumber(0, array.length - 1)];
    }

    /**
     * Generate random alphanumeric string
     * @param length - String length
     * @returns Random string
     */
    static randomAlphaNumeric(length: number = 10): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Generate random password
     * @param length - Password length
     * @returns Random password with letters, numbers, and symbols
     */
    static randomPassword(length: number = 12): string {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*';
        const allChars = lowercase + uppercase + numbers + symbols;
        
        let password = '';
        // Ensure at least one of each type
        password += lowercase.charAt(this.randomNumber(0, lowercase.length - 1));
        password += uppercase.charAt(this.randomNumber(0, uppercase.length - 1));
        password += numbers.charAt(this.randomNumber(0, numbers.length - 1));
        password += symbols.charAt(this.randomNumber(0, symbols.length - 1));
        
        // Fill rest randomly
        for (let i = password.length; i < length; i++) {
            password += allChars.charAt(this.randomNumber(0, allChars.length - 1));
        }
        
        // Shuffle the password
        return password.split('').sort(() => Math.random() - 0.5).join('');
    }

    /**
     * Generate unique ID
     * @returns Unique identifier
     */
    static uniqueId(): string {
        return `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }
}