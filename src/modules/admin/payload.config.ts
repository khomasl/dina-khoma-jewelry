// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from '@/modules/admin/collections/Categories'
import { Media } from '@/modules/admin/collections/Media'
import { Pages } from '@/modules/admin/collections/Pages'
import { Posts } from '@/modules/admin/collections/Posts'
import { Users } from '@/modules/admin/collections/Users'
import { Footer } from '@/modules/admin/Footer/config'
import { Header } from '@/modules/admin/Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/modules/admin/fields/defaultLexical'
import { getServerSideURL } from '@/modules/admin/utilities/getURL'
import {vercelBlobStorage} from "@payloadcms/storage-vercel-blob";
import BeforeLogin from "@/modules/admin/components/BeforeLogin";
import BeforeDashboard from "@/modules/admin/components/BeforeDashboard";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/modules/admin/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/modules/admin/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
      autoGenerate: true,
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      // TODO fix this
      connectionString: //process.env.DATABASE_URI ||
      'postgresql://content-db_owner:1l0GETHBwjWx@ep-lively-wildflower-a2f3ml54.eu-central-1.aws.neon.tech/content-db?sslmode=require',
        // || 'file:./payload3.db',
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [vercelBlobStorage({
    enabled: true, // Optional, defaults to true
    // Specify which collections should use Vercel Blob
    collections: {
      media: true,
      // 'media-with-prefix': {
      //   prefix: 'my-prefix',
      // },
    },
    // Token provided by Vercel once Blob storage is added to your Vercel project
    token: process.env.BLOB_READ_WRITE_TOKEN||'',
  }),
    ...plugins,
    // storage-adapter-placeholder
  ],
  // TODO fix this
  secret: '21d0c88a12f1cabe34e533c2',
  // secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
