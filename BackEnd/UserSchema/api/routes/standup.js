const user = require('../../model/standup')
const User = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/user', function (req,res){
        let note = new User(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/user',function(req,res){
        User.find({},(err,user)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!user){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(user)

                }
            }
        })
    })

    
    //specific get
    router.get('/user/:_id', async(req,res)=>{
        try{
            const post = await User.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })


}