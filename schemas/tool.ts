import { defineType } from "sanity"
export default {
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]
}
