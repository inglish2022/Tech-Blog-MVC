const User = require('./User');

const Post = require('./Post');

//create Associations
Post.belongsTo(User,  {
    foreignKey:  'user_id',
});

User.hasMany(Post,  {
    foreignKey: 'user_id'
});

module.exports = { User, Post };