const reviewSchema = {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Company',
      type: 'string',
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      //eslint-disable-next-line @typescript-eslint/no-explicit-any 
      validation: (Rule: any) => Rule.required().min(1).max(5)
    },
    {
      name: 'text',
      title: 'Review Text',
      type: 'text',

      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required().max(500)
    },
    {
      name: 'featured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      rating: 'rating'
    },
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({ title, subtitle, rating }: any) {
      return {
        title,
        subtitle: `${subtitle} - ${'★'.repeat(rating)}`
      }
    }
  }
}

export default reviewSchema