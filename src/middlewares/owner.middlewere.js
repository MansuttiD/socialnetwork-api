const {findCommentsById} = require('../comments/comments.controllers')

const ownerValidate = (req,res,next)=>{
    const commentId = req.params.id
    const userId = req.user.id
    findCommentsById(commentId)
    .then(data=>{
        if (data.userId == userId ) {
            next()
        }else{
            res.status(400).json({message: 'Only the owner can update it'})
        }
    })
    .catch(err=> res.status(400).json({message: err.message}))
}

module.exports = ownerValidate