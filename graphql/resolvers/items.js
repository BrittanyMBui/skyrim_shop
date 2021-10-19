const Item = require('../../models/Item');

module.exports = {
    Query: {
        async getItems() {
            try {
                const items = await Item.find();
                return items;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getItem(_, { itemId }) {
            try {
                const item = await Item.findById(itemId);
                if (item) {
                    return item;
                } else {
                    throw new Error('Item not found');
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async addItem(_, { itemInput: { itemName, itemPrice, itemDescription, itemImg, itemType } })
         {
            const newItem = new Item({
                itemName,
                itemPrice,
                itemDescription,
                itemImg,
                itemType            
            });

            const res = await newItem.save();
            
            return {
                ...res._doc,
                id: res._id
            };
        },
        async deleteItem(_, { itemId }) {
            try {
                const item = await Item.findById(itemId);
                item.delete();
                return 'Item deleted';
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}