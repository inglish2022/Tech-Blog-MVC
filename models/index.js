const User = require('./User');
const Post = require('./Post');

//create Associations
Post.belongsTo(User,  {
    foreignKey:  'userId',
});

User.hasMany(Post,  {
    foreignKey: 'userId'
});

module.exports = { User, Post };