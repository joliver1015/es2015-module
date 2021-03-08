const choice = (items) => {
    const random = Math.floor(Math.random() * items.length);
    return items[random];
}

const remove = (items, item) => {
    let removedItem;
    for (let i=0;i<items.length;i++) {
        if (items[i] === item) {
            return [...items.slice(0,i),...items.slice(i + 1)]
        }
        removedItem = items.splice(i,1)
    }
    return removedItem
}

export {choice, remove};