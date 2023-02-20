function makeFriendsList(friends) {
  const list = document.createElement('ul')
  friends.forEach(friend => {
    
    let newFriend = document.createElement('li')
    newFriend.innerText = `${friend.firstName} ${friend.lastName}`

    list.appendChild(newFriend)

  });
  return list
}
