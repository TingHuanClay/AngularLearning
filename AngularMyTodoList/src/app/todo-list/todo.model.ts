/**
 * Data model for todolist
 *
 * @export
 * @class Todo
 */
export class Todo {
    /** 
     * Item naming
     * @private
     * @memberof Todo
     */
    private title = '';

    /** 
     * Complete or Not
     * @private
     * @memberof Todo
     */
    private completed = false;

    /** 
     * Create an insteance of Todo 
     */
    constructor(title: string) {
        // || '' is avoid Falsy value keep the data clean
        this.title = title || '';
    }

    /**
     * the title of the todo item
     *
     * @readonly
     * @type {string}
     * @memberof Todo
     */
    getTitle(): string {
        return this.title;
    }

    /**
     * the todo item is completed or not
     *
     * @readonly
     * @type {boolean}
     * @memberof Todo
     */
    get done(): boolean {
        return this.completed;
    }

    

    /**
     * Change the status of complete
     *
     * @readonly
     * @memberof Todo
     */
    toggleCompletion(): void {
        this.completed = !this.completed;
    }
}
