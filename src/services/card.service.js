import { CardModel } from '~/models/card.model';
import { ColumnModel } from '../models/column.model';

const createNew = async (data) => {
    try {
        const createdCard = await CardModel.createNew(data);
        const getNewCard = await CardModel.findOneById(createdCard.insertedId);
        // console.log(getNewCard.columnId);

        await ColumnModel.pushCardOder(getNewCard.columnId.toString(), getNewCard._id.toString());
        return getNewCard;
    } catch (error) {
        throw new Error(error);
    }
};

export const CardService = { createNew };
