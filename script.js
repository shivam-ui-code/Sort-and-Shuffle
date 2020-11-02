const Numberconfig = [
    { number: 1, colorCode: '#6F98A8', colorCodeType: 'one' },
    { number: 2, colorCode: '#2B8EAD', colorCodeType: 'two' },
    { number: 3, colorCode: '#2F454E', colorCodeType: 'three' },
    { number: 4, colorCode: '#2B8EAD', colorCodeType: 'two' },
    { number: 5, colorCode: '#2F454E', colorCodeType: 'three' },
    { number: 6, colorCode: '#BFBFBF', colorCodeType: 'four' },
    { number: 7, colorCode: '#BFBFBF', colorCodeType: 'four' },
    { number: 8, colorCode: '#6F98A8', colorCodeType: 'one' },
    { number: 9, colorCode: '#2F454E', colorCodeType: 'three' },
]

const object = (function () {

    //Function for Sorting Item
    function createSortedItem() {
        removeItem();
        createItem(Numberconfig);
    }

    //Function for creating a item
    function createItem(data) {
        if (data && data.length) {
            data.forEach((data) => {
                var node = document.createElement("span");
                node.classList.add(data.colorCodeType);
                var textnode = document.createTextNode(data.number);
                node.appendChild(textnode);
                document.getElementById("myList").appendChild(node);
            });
        }
    }

    //For Shuffling
    function createShuffleItem() {
        const data = [...Numberconfig];
        const result = shuffle(data);
        removeItem();
        createItem(result);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    //removing item
    function removeItem() {
        var divsToRemove = document.getElementById("myList");
        if (!!divsToRemove.children) {
            for (var i = divsToRemove.children.length - 1; i >= 0; i--) {
                divsToRemove.children[i].remove();
            }
        }
    }
    return {
        createSortedItem: createSortedItem,
        createItem: createItem,
        createShuffleItem: createShuffleItem,
        shuffle: shuffle,
        removeItem: removeItem
    }
}())

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    // DOM is loaded and ready for manipulation here
    object.createSortedItem();
});
