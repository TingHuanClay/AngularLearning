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
     * status is Editing or Not 
     *
     * @private
     * @memberof Todo
     */
    private editMode = false;

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
    * update the title of the todo item
    *
    * @param {string} title
    * @memberof Todo
    */
    setTitle(title: string): void {
        this.title = title;
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

    /**
     * get editing status for the item
     *
     * @readonly
     * @type {boolean}
     * @memberof Todo
     */
    get editing(): boolean {
        return this.editMode;
    }
    
    /**
     * setting the edit status
     *
     * @memberof Todo
     */
    set editable(bl: boolean) {
        this.editMode = bl;
    }
}
