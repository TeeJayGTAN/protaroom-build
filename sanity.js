import { createCurrentUserHook, createClient } from 'next-sanity'

import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  /**
   * Find your project ID and dataset in sanity.json in your studio project.
   * These are considered "public", but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-04-25',

  useCdn: process.env.NODE_ENV === 'production',
}

//set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

/* set up a helper funcition for generating image urls with only the asset reference data in your documents*/

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

//Helper function for using the current logged in user account

export const useCurrentUser = createCurrentUserHook(config)
