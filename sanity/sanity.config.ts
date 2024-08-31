import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'blog-sanity',
    studioHost: 'noxblog',
    projectId: '67ly1ix3',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaTypes
    },
})
