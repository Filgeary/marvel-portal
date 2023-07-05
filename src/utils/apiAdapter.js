import { truncateStr } from './index'

/**
 * @param {import('../types/ICharacter').ICharacter | null | undefined} char
 */
export const transformCharacter = (char, imageVariant) => {
  if (!char) return

  const { id, name, description, thumbnail, urls } = char

  return {
    id,
    name,
    description: description ? truncateStr(description, 210) : 'No Description',
    thumbnail: thumbnail?.path + imageVariant['250x250'] + `.${thumbnail?.extension}`,
    externalLinks: urls,
  }
}
