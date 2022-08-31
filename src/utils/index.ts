export class Utils {

    static getDate() {
        const date = new Date();
        const day = (date.getDay()).toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}
