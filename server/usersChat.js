// USERS for Chat
const users = [];

// Adding authenticated users to chat
// "room" structure might change to simply "thread" like texting?
// or go away entirely, become one user to another auth'd user?
const addUser = ({ id, name, room }) => {
    // "Coders Complaining" -> "coderscomplaining"
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // does the user already exist with this name & room?
    const existingUser = users.find((user) => user.room === room && user.name === name);

    // must have name & room
    if (!name || !room) return { error: 'Username and room are required.' };
    // must be unique
    if (existingUser) return { error: 'Username is taken.' };
    // create & push
    const user = { id, name, room };
    users.push(user);
    return { user };
}

// removing
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    // splice off user
    if (index !== -1) return users.splice(index, 1)[0];
}

// get user and all users in room
const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };