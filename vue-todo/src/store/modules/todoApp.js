const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
        for (let index = 0; index < localStorage.length; index++) {
            console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
        }
        return arr;
        }
    }
};

const state = {
    todoItems : storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {completed:false, item:todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, todoItem){
        todoItem.completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations,
}