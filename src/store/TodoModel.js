import { observable, action } from 'mobx'

export default class TodoModel {
    store
    id
    @observable title
    @observable completed
    @observable remove

    constructor(store, title, completed, id , remove) {
        this.title = title
        this.completed = completed
        this.id = id
        this.store = store
        this.remove= remove
    }

    @action
    toggle() {
        this.completed = !this.completed
    }
}
