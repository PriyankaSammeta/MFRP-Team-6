
//Bus 
const bus = require('../../model/standup')
const Bus = require('../../model/standup')

// const standup = require('../../model/standup')
module.exports = function(router){


 // post data bus
    router.post('/bus', function (req,res){
        let note = new Bus(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

   

//get data which we posted bus
    
    router.get('/bus',function(req,res){
        Bus.find({},(err,bus)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!bus){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(bus)

                }
            }
        })
    })

   

    
    //specific get bus
    router.get('/bus/:_id', async(req,res)=>{
        try{
            const post = await Bus.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })

     




    //update data which we posted  put verb bus

    router.put('/updateBus/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Bus.findOne({_id:req.body._id},(err,bus)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                   
                    bus.from = req.body.from;
                    bus.to = req.body.to;
                    bus.date = req.body.date;
                    bus.fare = req.body.fare;
                    bus.seat = req.body.seat;

                    bus.save((err) => {
                        if(err){
                            res.json({success:false,message:err});
                        }else{
                            res.json({success:true,message :'standup updated'});
                        }
                    })
                }
            }
            )
        }
    })




    // delete data bus
    
    router.delete('/deletebus/:travelsname',(req,res) => {
        //check if id was provided in parameters
        if(!req.params.from){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Bus.findOne({from: req.params.from},(err,bus) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    bus.remove((err) => {
                        if(err) {
                            res.json({ success: false,message:err}); //return error message
                        } else{
                            res.json({success:true,message:'Standup deleted!'}); //return success message
                        }
                    });
                }
            });
        }
    });




}