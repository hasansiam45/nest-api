import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
}, {collection: 'visitorcomments'});

export class IComment {
    id: string;
    comment: string;
}