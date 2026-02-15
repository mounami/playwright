export class DateUtils{
     /**
     * Get current date in specified format
     * @param format - Date format (YYYY-MM-DD, DD/MM/YYYY, etc.)
     * @returns Formatted date string
     */

     static getCurrentDate(format: string = 'YYYY-MM-DD'):string {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        switch (format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;
            case 'DD/MM/YYYY':
                return `${day}/${month}/${year}`;
            case 'MM/DD/YYYY':
                return `${month}/${day}/${year}`;
            default:
                return `${year}-${month}-${day}`;
        }

     }

       /**
     * Get current timestamp
     * @returns Unix timestamp in milliseconds
     */
    static getTimestamp(): number {
        return Date.now();
    }

    /**
     * Add days to current date
     * @param days - Number of days to add (negative for past)
     * @param format - Date format
     * @returns Formatted date string
     */
    static addDays(days: number, format: string = 'YYYY-MM-DD'): string {
        const date = new Date();
        date.setDate(date.getDate() + days);
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        switch (format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;
            case 'DD/MM/YYYY':
                return `${day}/${month}/${year}`;
            default:
                return `${year}-${month}-${day}`;
        }
    }

    /**
     * Get date range
     * @param startDaysAgo - Days ago for start date
     * @param endDaysAgo - Days ago for end date (default: today)
     * @returns Object with start and end dates
     */
    static getDateRange(startDaysAgo: number, endDaysAgo: number = 0) {
        return {
            start: this.addDays(-startDaysAgo),
            end: this.addDays(-endDaysAgo)
        };
    }

    /**
     * Check if date is in the past
     * @param dateString - Date string to check
     * @returns True if date is in the past
     */
    static isDateInPast(dateString: string): boolean {
        const inputDate = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return inputDate < today;
    }

    /**
     * Get day of week
     * @param dateString - Date string (optional, defaults to today)
     * @returns Day name (Monday, Tuesday, etc.)
     */
    static getDayOfWeek(dateString?: string): string {
        const date = dateString ? new Date(dateString) : new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    /**
     * Format timestamp to readable string
     * @param timestamp - Unix timestamp
     * @returns Formatted date time string
     */
    static formatTimestamp(timestamp: number): string {
        const date = new Date(timestamp);
        return date.toLocaleString();
    }

    /**
     * Sleep/wait for specified milliseconds
     * @param ms - Milliseconds to wait
     */
    static async sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}