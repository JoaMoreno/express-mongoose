const Blog = require("../model/data.model");
const blogCtrl = {};

blogCtrl.getAllData = async (req, res) => {
    const data = await Blog.find() // Return all
    res.json(data);
};

blogCtrl.getData = async (req, res) => {
    const data = await Blog.findById(req.params.id);
    res.json(data);
};

blogCtrl.createData = async (req, res) => {
    const data = new Blog(req.body);
    await data.save();
    res.json({
        status: "Data Saved"
    })
};

blogCtrl.editData = async (req, res, next) => {
    const { id } = req.params;
    const data = {
        author: req.body.author,
        comments: req.body.comments
    }
    await Blog.findByIdAndUpdate(id, { $set: data }, { new: true });
    res.json({ status: "Updated successfully" })
}

blogCtrl.deleteData = async (req, res, next) => {
    await Blog.findByIdAndRemove(req.params.id);
    res.json({ status: 'Deleted' });
};

blogCtrl.editComments = async (req, res, next) => {
    const { id } = req.params;
    const data = {
        comments: req.body.comments
    }
    await Blog.findByIdAndUpdate(id, { $push: data }, { new: true });
    res.json({ status: "Edited successfully" })
}

blogCtrl.deleteComments = async (req, res, next) => {
    const { id } = req.params;
    await Blog.findOne({ "comments._id": id }, function (err, result) {
        result.comments.id(id).remove();
        result.save();
    });
    res.json({ status: 'Deleted' });
    
    // Collection.update({
    //     _id: parentDocumentId
    //   }, {
    //     $pull: {
    //       subDocument: {
    //         _id: SubDocumentId
    //       }
    //     }
    //   });
};

module.exports = blogCtrl;