bestFriend = (frdName) => {
    let largeName = '';
    for(let names of frdName){
        if(names.length > largeName.length){
            largeName = names;
        }
    }
    return largeName;
}

let friendsName = ["Najrul", "Sojib", "Taan", "Shourov"];
let bestFriendName = bestFriend(friendsName);
console.log(bestFriendName);