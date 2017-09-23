module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    album: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    albumImage: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tabs: DataTypes.TEXT
  })

  return Song
}