import { ColumnModel } from '../models/column.model';
import { BoardModel } from '../models/board.model';

const createNew = async (data) => {
    try {
        const createColumn = await ColumnModel.createNew(data);
        const getNewColumn = await ColumnModel.findOneById(createColumn.insertedId);
        await BoardModel.pushColumnOder(getNewColumn.boardId.toString(), getNewColumn._id.toString());

        return getNewColumn;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (id, data) => {
    try {
        const updateData = {
            ...data,
            updateAt: Date.now(),
        };
        const result = await ColumnModel.update(id, updateData);
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

export const ColumnService = { createNew, update };
