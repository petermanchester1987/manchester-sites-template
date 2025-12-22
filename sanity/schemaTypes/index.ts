import { type SchemaTypeDefinition } from 'sanity'
import gallerySchema from './gallerySchema'
import reviewSchema from './reviewSchema'
import postSchema from './postSchema'
import authorSchema from './authorSchema'
import categorySchema from './categorySchema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    gallerySchema, 
    reviewSchema, 
    postSchema, 
    authorSchema,
    categorySchema
  ],
}
