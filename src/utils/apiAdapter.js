/**
 * @param {import('../types/ICharacter').ICharacter | undefined} char
 */
export const transformCharacter = char => {
  if (!char) return

  const { id, name, description, thumbnail, urls } = char

  return {
    id,
    name,
    description: description ? `${description.slice(0, 230)}...` : 'No Description',
    thumbnail: thumbnail?.path + '.' + thumbnail?.extension,
    externalLinks: urls,
  }
}
