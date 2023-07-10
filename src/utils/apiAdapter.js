import { truncateStr } from './index'

/**
 * @param {import('../types/ICharacter').ICharacter | null | undefined} char
 */
export const transformCharacter = (char, imageVariant, isFullDescription = true) => {
  if (!char) return

  const { id, name, description, thumbnail, urls, resourceURI } = char
  const formattedDescription = isFullDescription ? description : truncateStr(description, 180)

  return {
    id,
    name,
    description: formattedDescription || 'No Description',
    thumbnail: thumbnail?.path + imageVariant + `.${thumbnail?.extension}`,
    externalLinks: urls,
    resourceURI,
  }
}
