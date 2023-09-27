function generateUL(names) {
    const ul = document.createElement('ul');

    const listItems = names.map(name => {
        const li = document.createElement('li');
        li.textContent = name;
        return li;
    });

    ul.append(...listItems);

    return ul;
}