import * as bucketListDao from "../../bucketList/bucketList-dao.js";

const findBucketListItem  = async (req, res) => {
    const bucketListItem = await bucketListDao.findBucketList();
    res.json(bucketListItem);
}

const addBucketListItem = async (req, res) => {
    const bucketListItem = req.body;
    console.log(bucketListItem);
    const insertedBucketListItem = await bucketListDao.createBucketList(bucketListItem)
    res.json(insertedBucketListItem);
}

const updateBucketListItem = async (req, res) => {
    const bucketListItemIdToUpdate = req.params.bucketListId;
    const updates = req.body;
    const status = await bucketListDao.updateBucketList(bucketListItemIdToUpdate, updates);
    res.json(status);
}
const deleteBucketListItem = async (req, res) => {
    const deleteBucketListItemId = req.params.bucketListId;
    const status = await bucketListDao.deleteBucketList(deleteBucketListItemId);
    res.json(status);
}

const findBucketListItemById  = async (req, res) => {
    const bucketListId = req.params.bucketListId;
    console.log(bucketListId);
    const bucketListItem = await bucketListDao.findBucketListById(bucketListId);
    res.json(bucketListItem);
}
export default (app) => {
    app.get('/api/bucketList/getBucketList', findBucketListItem);
    app.get('/api/bucketList/getBucketListItemById/:bucketListId',findBucketListItemById);
    app.post('/api/bucketList/addBucketListItem',addBucketListItem);
    app.put('/api/bucketList/updateBucketListItem/:bucketListId',updateBucketListItem);
    app.delete('/api/bucketList/deleteBucketListItem/:bucketListId',deleteBucketListItem);
}