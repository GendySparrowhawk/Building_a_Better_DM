const Item = require('../models/Items');

// tested and good to go 3/8/24
async function findAllItems(req, res) {
    try {
        const items = await Item.find({});

        res.status(200).json(items);
    } catch (err) {
        console.error("No items, oops", err);
        res.status(500).json({ error: "An oops happened while trying to get all the items" });
    }
}

async function findOneItem(req, res) {
    try {
        const itemName = req.params.name;

        const item = await Item.findOne({ name: itemName });
        if(!item) {
            return res.status(404).json({ error: "no item by that name found" });
        } else {
            return res.status(200).json(item);
        }
    } catch (err) {
        console.error("server error findign item", err);
        res.status(500).json({ error: "no item found"})
    }
}

module.exports = {
    findAllItems,
    findOneItem,
};