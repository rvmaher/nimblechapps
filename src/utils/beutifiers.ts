const getEpisode = (str: string) => {
  const parts = str.split('/');
  const episodeNumber = parts[parts.length - 1];
  return episodeNumber + ' ';
};

export {getEpisode};
