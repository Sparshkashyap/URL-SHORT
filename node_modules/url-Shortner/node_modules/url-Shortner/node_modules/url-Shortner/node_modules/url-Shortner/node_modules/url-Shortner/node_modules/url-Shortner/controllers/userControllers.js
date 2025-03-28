const { log } = require('console');
const URL = require('../models/userSchema');

const shortid = require('shortid');

const ShortURL = async (req, res) => {

    try {
        const body = req.body;

        // console.log("✅ Generated body:", body);

        if (!body) {

            return res.status(404).json({ status: "pending", message: "URL Not defined" });
        }

        const shortID = shortid.generate();
        // console.log("✅ Generated shortID:", shortID);

        const newURL = await URL.create({

            originalURL: body.originalURL,
            shortidURL: shortID,
            visithistory: [],
            createdBy: req.user._id,
        }
        );

        // console.log("✅ Generated newURL:", newURL);

        if (!newURL) {

            return res.status(404).json({ status: "pending", message: "URL not create" })
        }


        return res.render('home', {
            sparshid: shortID
        });
    }
    catch (err) {

        console.log("Error is occur ");
        return res.status(404).json({status:"pending",message:"User Not defined"});

    }
}



const redirecturl = async (req, res) => {


    try {

        const shortidURL = req.params.sid;
        // console.log(shortidURL);

        const entry = await URL.findOneAndUpdate(
            {
                shortidURL
            },
            {
                $push: {
                    visithistory: {
                        timestamps: Date.now()
                    },

                }
            },
            {
                new: true
            }

        );

        if (!entry) {
            return res.status(404).json({ status: "pending", message: "entry is not exist" });
        }
        return res.redirect(entry.originalURL);
    }
    catch (err) {

        console.log("Error occur : ");
        return res.status(404).json({ status: "pending", message: "There is some Error" });
    }
};

const Analytics = async (req, res) => {
    const shortid = req.params.sid;
    const result = await URL.findOne({ shortidURL: shortid });

    return res.status(200).json({
        totalvisits: result.visithistory.length,
        analytics: result.visithistory
    })

}


const Render = async (req, res) => {

    try {
        // console.log(req.user);
        if(!req.user){
            return res.redirect('/user/login');
        }
        const allurls = await URL.find({createdBy:req.user._id});
        // console.log(allurls);
        res.render('home', { urls: allurls });
    }
    catch (err) {
        console.log("Error occur");
        return res.status(404).json({ status: "pending", message: "Page not Rendering properly" });

    }
}

module.exports = { ShortURL, redirecturl, Analytics, Render };
