const gallerySchema = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ],
     //eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Project', value: 'project' },
          { title: 'Product', value: 'product' },
          { title: 'Event', value: 'event' },
        ]
      }
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
     //eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required().min(0)
    }
  ],
  orderings: [
    {
      title: 'Order, Ascending',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}

export default gallerySchema